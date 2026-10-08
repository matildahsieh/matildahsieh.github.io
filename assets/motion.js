/* Soft motion: fade in on scroll and the torii parallax.
   Does nothing when the visitor prefers reduced motion. */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var main = document.querySelector('main');
  if (!main) return;

  // 1. Fade in on scroll: the content of every section after the first one
  var sections = Array.prototype.slice.call(main.querySelectorAll('section, nav.next-project')).slice(1);
  var targets = [];
  sections.forEach(function (section) {
    var box = section;
    while (box.children.length === 1 && box.firstElementChild.tagName === 'DIV') box = box.firstElementChild;
    Array.prototype.forEach.call(box.children, function (el) {
      if (/^(SCRIPT|STYLE)$/.test(el.tagName)) return;
      var display = getComputedStyle(el).display;
      // Rows of cards, swatches and screens appear one after another
      if (/grid|flex/.test(display) && el.children.length >= 2 && el.children.length <= 8 && !/^(UL|OL)$/.test(el.tagName) && el.querySelector('img, article, figure, div')) {
        Array.prototype.forEach.call(el.children, function (child, i) { targets.push([child, i]); });
      } else {
        targets.push([el, 0]);
      }
    });
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  var hidden = [];
  targets.forEach(function (t) {
    var el = t[0];
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;   // already on screen: leave it be
    el.style.transition = 'none';               // start hidden without fading out first
    el.classList.add('reveal');
    hidden.push([el, Math.min(t[1], 5) * 90]);
  });
  void main.offsetHeight;                        // apply the hidden state before turning transitions back on
  hidden.forEach(function (h) {
    h[0].style.transition = '';
    h[0].style.transitionDelay = h[1] + 'ms';
    observer.observe(h[0]);
  });

  // 3. Torii parallax on the homepage hero
  var ghost = document.querySelector('.hero-ghost');
  if (ghost) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < 1200) ghost.style.translate = '0 ' + (y * 0.12).toFixed(1) + 'px';
        ticking = false;
      });
    }, { passive: true });
  }
})();
