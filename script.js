/* ── THEME TOGGLE ── */
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', saved);

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

/* ── PARTICLES ── */
const container = document.getElementById('particles');
for (let i = 0; i < 14; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 6 + 3;
  p.style.cssText = `
    width: ${size}px; height: ${size}px;
    left: ${Math.random() * 100}%;
    animation-duration: ${Math.random() * 18 + 10}s;
    animation-delay: ${Math.random() * 12}s;
  `;
  container.appendChild(p);
}

/* ── ACTIVE NAV ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--text-accent)' : '';
      });
    }
  });
}, { passive: true });

/* ── CONTACT FORM (demo) ── */
function handleContactSubmit(btn) {
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'var(--b600)';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      btn.style.opacity = '';
    }, 3000);
  }, 1500);
}