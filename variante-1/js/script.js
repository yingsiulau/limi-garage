// Mobile navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

const closeNav = () => {
  navMenu.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
};

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px -10% 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Interactive image hotspots
const hotspots = Array.from(document.querySelectorAll('.hotspot'));
if (hotspots.length) {
  const closeAll = (except) => {
    hotspots.forEach((h) => {
      if (h === except) return;
      h.classList.remove('is-open');
      h.querySelector('.hotspot-btn').setAttribute('aria-expanded', 'false');
    });
  };

  hotspots.forEach((h) => {
    const btn = h.querySelector('.hotspot-btn');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = h.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      if (open) closeAll(h);
    });
  });

  document.addEventListener('click', () => closeAll(null));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll(null);
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
