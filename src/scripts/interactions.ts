const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector<HTMLElement>('.header');
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');

function setMenu(open: boolean, restoreFocus = false) {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  header?.classList.toggle('menu-open', open);
  if (nav) nav.inert = mobile.matches && !open;
  if (restoreFocus) toggle?.focus();
}

if (toggle && nav) {
  document.documentElement.classList.add('menu-ready');
  setMenu(false);
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => link.addEventListener('click', () => {
    setMenu(false);
    const target = document.querySelector<HTMLElement>(link.hash);
    if (target && mobile.matches) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !header?.contains(event.target)) setMenu(false);
  });
  mobile.addEventListener('change', () => setMenu(false));
}

if ('IntersectionObserver' in window) {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const reveal = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        reveal.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  if (!motion.matches) targets.forEach((target) => {
    // Content above the fold and anchor destinations are always immediately readable.
    if (target.getBoundingClientRect().top > window.innerHeight) {
      target.classList.add('reveal-pending');
      reveal.observe(target);
    }
  });
  motion.addEventListener('change', () => {
    if (motion.matches) {
      targets.forEach((target) => target.classList.remove('reveal-pending'));
      reveal.disconnect();
    }
  });
  document.addEventListener('focusin', (event) => {
    if (event.target instanceof Element) event.target.closest('[data-reveal]')?.classList.remove('reveal-pending');
  });
  const links = nav?.querySelectorAll<HTMLAnchorElement>('a');
  const active = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) {
      links?.forEach((link) => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-18% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach((section) => active.observe(section));
}

// A single typing pass; the full heading remains in the HTML and accessibility tree.
const typedText = document.querySelector<HTMLElement>('[data-typewriter]');
if (typedText && !motion.matches) {
  const fullText = typedText.textContent ?? '';
  const characters = Array.from(fullText);
  let position = 0;
  let timer = 0;
  const finishTyping = () => {
    window.clearTimeout(timer);
    typedText.textContent = fullText;
    typedText.classList.remove('typing-active');
  };
  const typeNext = () => {
    position += 1;
    typedText.textContent = characters.slice(0, position).join('');
    timer = window.setTimeout(position < characters.length ? typeNext : finishTyping,
      position < characters.length ? 80 : 1400);
  };
  typedText.textContent = '';
  typedText.classList.add('typing-active');
  timer = window.setTimeout(typeNext, 300);
  motion.addEventListener('change', () => {
    if (motion.matches) finishTyping();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) finishTyping();
  });
}
