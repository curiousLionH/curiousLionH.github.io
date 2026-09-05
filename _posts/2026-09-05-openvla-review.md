---
layout: post
title: "[Paper Review] OpenVLA: An Open-Source Vision-Language-Action Model"
date: 2026-09-05
categories: paper-review
tags: [vla, robotics, imitation-learning, foundation-models, fine-tuning, lora]
math: true
---

> **Paper**: OpenVLA: An Open-Source Vision-Language-Action Model
> **Authors**: Moo Jin Kim\*, Karl Pertsch\*, Siddharth Karamcheti\*, Ted Xiao, Ashwin Balakrishna, Suraj Nair, Rafael Rafailov, Ethan Foster, Grace Lam, Pannag Sanketi, Quan Vuong, Thomas Kollar, Benjamin Burchfiel, Russ Tedrake, Dorsa Sadigh, Sergey Levine, Percy Liang, Chelsea Finn (\*equal contribution) — Stanford, UC Berkeley, Toyota Research Institute, Google DeepMind, Physical Intelligence, MIT
> **Venue**: arXiv:2406.09246 (2024)
> **Links**: [[arXiv]](https://arxiv.org/abs/2406.09246) · [[Project / Code]](https://openvla.github.io)

---

## TL;DR

OpenVLA is a 7B-parameter, fully open-source vision-language-action (VLA) model — a vision-language model fine-tuned to output robot actions as language tokens. Trained on 970k robot demonstrations from Open X-Embodiment, it outperforms the 55B-parameter closed-source RT-2-X by 16.5% absolute success rate with 7x fewer parameters, and the paper shows it can be adapted to new robots cheaply via LoRA fine-tuning and served via 4-bit quantization on consumer GPUs.

---

## Background

### Problem Setup

Given an image observation and a natural-language task instruction, the goal is to predict a robot's next action — here a 7-dimensional end-effector delta $(\Delta x, \Delta \theta, \Delta\text{grip})$. Policies trained purely on robot demonstrations don't generalize well beyond their training distribution (new objects, backgrounds, phrasing), while Internet-scale vision-language models (CLIP, SigLIP, Llama 2) generalize far better than anything robotics datasets can offer on their own — robot datasets top out around 1M trajectories, versus trillions of tokens for VLM pretraining.

Vision-language-action models (VLAs) close this gap by directly fine-tuning a pretrained VLM to emit robot actions. RT-2 and RT-2-X demonstrated this works, but:

- Existing VLAs are **closed** — no visibility into architecture, training data, or procedure.
- Prior work doesn't explore **efficient fine-tuning** to new robots/tasks, especially on commodity hardware — which is what would actually make VLAs adoptable.

OpenVLA sets out to fix both: an open model, and a systematic study of how to adapt it cheaply.

---

## Method

### Key Idea

Treat action prediction as a language-modeling problem. Discretize each of the 7 continuous action dimensions into 256 bins (using the 1st–99th percentile range per dimension, not min/max, to avoid outliers blowing up the bin width), then overwrite the 256 *least-used* tokens in the Llama tokenizer's vocabulary with these action tokens. The VLM is then fine-tuned with an ordinary next-token-prediction objective, with the loss computed only over the action tokens.

### Formulation

$$
\mathcal{L}(\theta) = -\,\mathbb{E}_{(o,\, \ell,\, a) \sim \mathcal{D}}\left[\sum_{i=1}^{7} \log p_\theta\big(a_i \mid o,\, \ell,\, a_{<i}\big)\right]
$$

where $o$ is the image observation, $\ell$ the language instruction, and $a_i$ the discretized token for action dimension $i$.

### Architecture

Three components (built on the Prismatic-7B VLM):

1. **Vision encoder** — SigLIP and DINOv2 patch features are extracted separately and **concatenated channel-wise**. DINOv2 contributes low-level spatial features, SigLIP contributes higher-level semantics; the paper credits this fusion for better spatial reasoning than CLIP/SigLIP-only encoders.
2. **Projector** — a small 2-layer MLP mapping fused visual features into the language model's embedding space.
3. **LLM backbone** — Llama 2 7B, predicting action tokens autoregressively.

```python
def forward(self, image, instruction):
    v_dino = self.dinov2(image)                 # low-level spatial features
    v_siglip = self.siglip(image)                # high-level semantic features
    v = torch.cat([v_dino, v_siglip], dim=-1)    # fuse channel-wise
    v_tokens = self.mlp_projector(v)             # project into LLM embedding space
    text_tokens = self.tokenizer(instruction)
    logits = self.llama(inputs_embeds=torch.cat([v_tokens, text_tokens], dim=1))
    action_tokens = logits[:, -7:].argmax(-1)    # 7 discretized action-token predictions
    return self.detokenize(action_tokens)        # -> [Δx, Δy, Δz, Δroll, Δpitch, Δyaw, Δgrip]
```

### Data

970k trajectories curated from Open X-Embodiment (70+ source datasets, 2M+ raw trajectories): filtered to single-arm, end-effector-controlled manipulation with at least one third-person camera, then mixed using Octo's dataset weights to balance embodiment/task/scene diversity. DROID was added at a conservative 10% weight but showed persistently low action-token accuracy, so it was dropped for the final third of training.

### Design decisions (from smaller-scale ablations on BridgeData V2)

- **VLM backbone**: Prismatic > LLaVA > IDEFICS-1. LLaVA beat IDEFICS-1 by 35% absolute success on language-grounding tasks; Prismatic (fused DINOv2+SigLIP) beat LLaVA by a further ~10%.
- **Image resolution**: 224×224 performs the same as 384×384 in their tests, at 3x less training compute — so they kept 224×224, even though higher resolution usually helps plain VLM benchmarks.
- **Fine-tuning the vision encoder matters.** This cuts against typical VLM wisdom (freeze the vision encoder to preserve pretrained features) — they hypothesize the frozen features aren't fine-grained enough for precise control.
- **Training length**: 27 epochs — far more than the 1–2 epochs typical for LLM/VLM pretraining — with real-robot performance tracking action-token accuracy up to >95%.
- **Learning rate**: fixed $2\times10^{-5}$, no benefit from warmup.

**Infrastructure**: 64 A100s for 14 days (~21,500 A100-hours), batch size 2048. Inference: 15GB VRAM in bfloat16, ~6Hz on an RTX 4090.

---

## Experiments

### Setup

- **Out-of-the-box eval**: WidowX (BridgeData V2, 170 rollouts / 17 tasks) and a mobile manipulator ("Google robot", 60 rollouts / 12 tasks), against RT-1-X (35M), Octo (93M), and RT-2-X (55B, closed).
- **New-robot fine-tuning**: Franka-Tabletop and Franka-DROID (10–150 demos/task), against Diffusion Policy trained from scratch and fine-tuned Octo.
- **Efficiency studies**: LoRA vs. other parameter-efficient fine-tuning strategies; bfloat16 vs. int8 vs. int4 inference.

### Main Results

- **Out-of-the-box**: OpenVLA beats the 55B RT-2-X by 16.5% absolute success rate across 29 tasks on WidowX + Google robot, with 7x fewer parameters — attributed to a larger curated dataset (970k vs. 350k trajectories), more careful data cleaning, and the fused vision encoder. RT-2-X still wins on *semantic* generalization, since it's co-trained on Internet-scale vision-language data rather than fine-tuned purely on robot actions.
- **New-robot fine-tuning**: Diffusion Policy remains strongest on narrow, single-instruction tasks, but OpenVLA and Octo win on diverse, multi-object, language-grounded tasks. OpenVLA is the only method to clear 50% success on *every* tested task category, and beats Diffusion Policy by 20.4% on language-grounding tasks specifically.

### Parameter-efficient fine-tuning (Table 1, Franka-Tabletop)

| Strategy | Success rate | Trainable params (M) | VRAM (bs=16) |
|---|---|---|---|
| Full fine-tuning | 69.7 ± 7.2% | 7,188.1 | 163.3 GB |
| Last layer only | 30.3 ± 6.1% | 465.1 | 51.4 GB |
| Frozen vision encoder | 47.0 ± 6.9% | 6,760.4 | 156.2 GB |
| Sandwich fine-tuning | 62.1 ± 7.9% | 914.2 | 64.0 GB |
| **LoRA, rank 32** | **68.2 ± 7.5%** | **97.6** | **59.7 GB** |
| LoRA, rank 64 | 68.2 ± 7.8% | 195.2 | 60.5 GB |

LoRA matches full fine-tuning while touching only **1.4%** of the parameters, cutting fine-tuning time from an 8-A100 job to a single A100 in 10–15 hours.

### Quantized inference (Table 2, BridgeData V2)

| Precision | Success rate | VRAM |
|---|---|---|
| bfloat16 | 71.3 ± 4.8% | 16.8 GB |
| int8 | 58.1 ± 5.1% | 10.2 GB |
| int4 | 71.9 ± 4.7% | 7.0 GB |

int4 matches bfloat16 while more than halving memory; int8 actually *hurts* because its added dequantization overhead drops throughput to 1.2Hz — slow enough to change the closed-loop control dynamics relative to training.

---

## Analysis

### Strengths

- First VLA that is open end-to-end (weights, training data, and code), and it still beats a 55B closed model at 7B parameters.
- The action-as-language-token trick means VLA training reuses the entire modern LLM training stack (FSDP, FlashAttention, HuggingFace `AutoModel`) — very little bespoke infrastructure.
- The ablation section is unusually actionable: fine-tune the vision encoder, use ~27 epochs, prefer LoRA rank 32, use int4 not int8 — genuinely a recipe, not just a leaderboard result.
- LoRA + int4 quantization together make VLA fine-tuning and serving feasible on a single consumer GPU, which matters a lot for reproducibility and adoption outside large labs.

### Weaknesses / Limitations

- Single RGB image input only — no observation history, no multi-camera, no proprioception, which the paper itself flags as unrealistic for many real robot setups.
- Inference tops out around 6–9Hz, well short of the 50Hz needed for setups like ALOHA or for dexterous bimanual manipulation.
- Even where OpenVLA wins, absolute reliability is modest — typically under 90% success.
- The 256-bin, per-dimension-independent action tokenization is simple but coarse; it's unclear how well it scales to tasks needing high-precision or fast, continuous control.
- Compute constraints leave real questions open: effect of base VLM size, whether co-training on Internet vision-language data (like RT-2-X does) would close the semantic-generalization gap, which visual features matter most.

---

## My Take

The most transferable idea here isn't really "VLA" as a robotics concept — it's that **casting a structured prediction problem as next-token prediction over a repurposed LLM vocabulary** gets you the entire LLM ecosystem (scaling infra, parameter-efficient fine-tuning, quantization) almost for free. That's relevant well beyond manipulation policies.

The "fine-tune the vision encoder, don't freeze it" finding also stands out to me from a perception background — it's the opposite of what typically works when adapting a VLM for language/vision benchmarks, which suggests fine-grained spatial grounding for *control* has different requirements than grounding for *description*. I'd guess this generalizes to other perception transfer-learning settings where downstream precision (localization, pose) matters more than semantics.

**Follow-up questions:**
- How would this action-tokenization scheme extend to richer, multi-sensor inputs — e.g., fusing LiDAR and camera observations the way autonomous-driving perception stacks do — rather than a single RGB frame?
- Does "unfreeze the vision encoder" hold for other perception transfer settings (detection/tracking backbones pretrained on Internet-scale image data), or is it specific to control?
- With a larger, purpose-built action vocabulary instead of a 256-token hack borrowed from unused Llama tokens, how much precision/dexterity would be recoverable without sacrificing the language-model-reuse benefits?

---

## References

1. Kim, M. J., Pertsch, K., Karamcheti, S., et al. "OpenVLA: An Open-Source Vision-Language-Action Model." arXiv:2406.09246, 2024.
2. Open X-Embodiment Collaboration et al. "Open X-Embodiment: Robotic Learning Datasets and RT-X Models." 2024.
3. Brohan, A. et al. "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control." 2023.
4. Octo Model Team et al. "Octo: An Open-Source Generalist Robot Policy." 2024.
5. Karamcheti, S. et al. "Prismatic VLMs: Investigating the Design Space of Visually-Conditioned Language Models." 2024.
6. Chi, C. et al. "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion." 2023.
7. Hu, E. J. et al. "LoRA: Low-Rank Adaptation of Large Language Models." 2021.
