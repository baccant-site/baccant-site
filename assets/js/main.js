document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (typeof window.gtag !== 'function') return;
      event.preventDefault();
      const destination = link.href;
      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        window.location.href = destination;
      };
      window.gtag('event', 'conversion', {
        send_to: 'AW-18453277349/HoPeCM796fgcEKXVmt9E',
        value: 1.0,
        currency: 'EUR',
        event_callback: go
      });
      window.setTimeout(go, 900);
    });
  });
});
