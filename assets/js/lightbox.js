// Lightbox minimale per la galleria (sostituisce mootools + slimbox)
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('a[data-lightbox]'));
  if (!links.length) return;
  var i = 0;
  var box = document.createElement('div');
  box.id = 'lb';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML =
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button class="chiudi" aria-label="Chiudi">&times;</button>' +
    '<button class="prec" aria-label="Precedente">&lsaquo;</button>' +
    '<button class="succ" aria-label="Successiva">&rsaquo;</button>';
  document.body.appendChild(box);
  var img = box.querySelector('img'), cap = box.querySelector('figcaption');

  function show(n) {
    i = (n + links.length) % links.length;
    img.src = links[i].href;
    img.alt = links[i].title;
    cap.textContent = links[i].title + '  (' + (i + 1) + '/' + links.length + ')';
    box.classList.add('aperto');
  }
  function close() { box.classList.remove('aperto'); links[i].focus(); }

  links.forEach(function (a, n) {
    a.addEventListener('click', function (e) { e.preventDefault(); show(n); });
  });
  box.querySelector('.chiudi').onclick = close;
  box.querySelector('.prec').onclick = function () { show(i - 1); };
  box.querySelector('.succ').onclick = function () { show(i + 1); };
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('aperto')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();
