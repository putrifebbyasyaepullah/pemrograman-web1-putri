/* script.js - efek ringan: bayangan navigasi saat digulir dan kemunculan konten secara halus */
(function () {
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '.section-title, .section-lead, .checks li, .rows li, .benefit, .aspek-card, .stat, ' +
    '.gallery figure, .video, .form-card, .table-box, .profile, .cta .wrap, .about-art'
  );
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('in');
      setTimeout(function () { el.style.transitionDelay = ''; }, 1000);
      io.unobserve(el);
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) {
    var pos = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(pos, 4) * 90 + 'ms';
    io.observe(el);
  });
})();
