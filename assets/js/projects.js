// Project cards open a <dialog> with the full write-up.
// Deep links work too: /projects/#evoreg opens that dialog on load.
(function () {
  var cards = document.querySelectorAll('.project-card[data-project]');
  if (!cards.length) return;

  var lastCard = null;

  function dialogFor(name) {
    return document.getElementById('project-' + name);
  }

  function open(name, card) {
    var dialog = dialogFor(name);
    if (!dialog || dialog.open) return;
    lastCard = card || null;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.documentElement.classList.add('modal-open');
    history.replaceState(null, '', '#' + name);
  }

  cards.forEach(function (card) {
    var name = card.getAttribute('data-project');
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // let inline links navigate
      open(name, card);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(name, card);
      }
    });
  });

  document.querySelectorAll('.project-modal').forEach(function (dialog) {
    dialog.querySelector('.project-modal__close').addEventListener('click', function () {
      dialog.close();
    });
    // A click on the backdrop lands on the <dialog> itself, not its inner wrapper.
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', function () {
      document.documentElement.classList.remove('modal-open');
      history.replaceState(null, '', location.pathname + location.search);
      if (lastCard) lastCard.focus();
    });
  });

  var initial = location.hash.slice(1);
  if (initial && dialogFor(initial)) {
    open(initial, document.querySelector('.project-card[data-project="' + initial + '"]'));
  }
})();
