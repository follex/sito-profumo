// Come il modulo "immagine casuale" di Joomla: a ogni visita una delle due immagini
(function () {
  var img = document.getElementById('home-img');
  if (img && Math.random() < 0.5) img.src = img.getAttribute('data-alt-src');
})();
