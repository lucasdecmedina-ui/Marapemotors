const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); navigation.classList.remove('is-open'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } } });
document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMenu(); });
document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/5513997235944?text=' + encodeURIComponent(a.dataset.wa); });
document.querySelector('#year').textContent = new Date().getFullYear();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
}
const header = document.querySelector('.header');
window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 24), {passive: true});
document.querySelector('#budget-form').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  if(!form.reportValidity()) return;
  const data = new FormData(form);
  const message = ['Olá, Marapé Motors! Vim pelo site.', '', `Meu nome é ${data.get('name').trim()}.`, `Tenho interesse em: ${data.get('service')}.`, data.get('vehicle').trim() ? `Veículo: ${data.get('vehicle').trim()}.` : '', data.get('message').trim() ? `Detalhes: ${data.get('message').trim()}` : '', '', 'Gostaria de conversar com a equipe e solicitar mais informações.'].filter(line => line !== '').join('\n');
  window.open('https://wa.me/5513997235944?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
});
document.querySelectorAll('.faq-list details').forEach(details => details.addEventListener('toggle', () => { if (details.open) document.querySelectorAll('.faq-list details').forEach(other => { if(other !== details) other.open = false; }); }));
