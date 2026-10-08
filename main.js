document.querySelector('#year').textContent = new Date().getFullYear();

const nebula = document.createElement('div');
nebula.className = 'nebula';
nebula.setAttribute('aria-hidden', 'true');
nebula.innerHTML = '<div class="nebula-cloud nebula-cloud-far"></div><div class="nebula-cloud nebula-cloud-near"></div><div class="nebula-stars"></div>';
document.body.prepend(nebula);

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let frame = 0;
function renderNebula() {
  frame = 0;
  const offset = reducedMotion.matches ? 0 : window.scrollY;
  nebula.style.setProperty('--nebula-far', `${-offset * 0.035}px`);
  nebula.style.setProperty('--nebula-near', `${-offset * 0.075}px`);
}
function scheduleNebula() {
  if (!frame) frame = requestAnimationFrame(renderNebula);
}
window.addEventListener('scroll', scheduleNebula, { passive: true });
reducedMotion.addEventListener('change', scheduleNebula);
renderNebula();
