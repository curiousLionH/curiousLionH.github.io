---
layout: post
title: "[논문 리뷰] 제목을 여기에"
date: 2026-04-14
categories: paper-review
tags: [deep-learning, template]
math: true
---

> **Paper**: 논문 전체 제목  
> **Authors**: 저자 목록  
> **Venue**: 학회/저널 이름 (연도)  
> **Links**: [[arXiv]](https://arxiv.org) · [[Code]](https://github.com)

---

## TL;DR

논문을 한두 문장으로 요약.

---

## 배경 (Background)

이 논문이 해결하려는 문제와 관련 배경 지식을 설명합니다.

### 문제 정의

기존 방법의 한계점:
- 한계 1
- 한계 2

---

## 방법론 (Method)

### 핵심 아이디어

논문의 핵심 기여를 설명합니다.

### 수식

목적 함수:

$$
\mathcal{L} = \mathbb{E}_{x \sim p_\text{data}} \left[ \log p_\theta(x) \right]
$$

모델 구조:

$$
h_t = f(W_h h_{t-1} + W_x x_t + b)
$$

### 알고리즘

```python
# 핵심 알고리즘 구현 예시
def forward(self, x):
    # step 1
    h = self.encoder(x)
    # step 2
    out = self.decoder(h)
    return out
```

---

## 실험 (Experiments)

### 설정

- **데이터셋**: 
- **베이스라인**: 
- **평가 지표**: 

### 결과

| Method | Metric 1 | Metric 2 |
|--------|----------|----------|
| Baseline | 0.00 | 0.00 |
| **Ours** | **0.00** | **0.00** |

---

## 분석 (Analysis)

### 강점
- 

### 약점 / 한계
- 

---

## 개인적인 생각

이 논문에서 흥미로운 점과 향후 연구 방향에 대한 생각을 적습니다.

---

## 참고문헌

1. 
2. 
