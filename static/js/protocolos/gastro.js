/**
 * gastro.js  –  navegación interna + calculadora de hidratación
 * Requiere: Tailwind (clases utilitarias) – sin dependencias externas.
 */

/* ---------- Navegación por pestañas ---------- */
const tabs   = document.querySelectorAll('.tab');
const slides = document.querySelectorAll('.slide');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    // estado visual
    tabs.forEach(b => b.classList.remove('bg-blue-200', 'font-semibold'));
    btn.classList.add('bg-blue-200', 'font-semibold');

    // cambio de vista
    slides.forEach(sec => {
      sec.classList.toggle('hidden', sec.id !== btn.dataset.target);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* ---------- Calculadora de reposición hídrica ---------- */
const form      = document.getElementById('calc-form');
const outBox    = document.getElementById('calc-out');
const volTotal  = document.getElementById('vol-total');
const volHora   = document.getElementById('vol-hora');
const solucion  = document.getElementById('solucion');

form?.addEventListener('submit', e => {
  e.preventDefault();

  const peso = parseFloat(form.peso.value);
  const pct  = parseFloat(form.porcentaje.value) / 100;
  if (isNaN(peso) || isNaN(pct)) return;

  const vol = peso * pct * 1000;          // ml
  let plan, horas;

  if (pct < 0.05)       { plan = 'Plan A – hidratación oral'; horas = 0; }
  else if (pct < 0.10)  { plan = 'Plan B – suero oral';       horas = 4; }
  else                  { plan = 'Plan C – hidratación IV';   horas = 3; }

  volTotal.textContent = `Volumen total: ${vol.toFixed(0)} ml`;
  volHora.textContent  = horas ? `Velocidad: ${(vol / horas).toFixed(0)} ml/h durante ${horas} h.` : '';
  solucion.textContent = `Recomendación: ${plan}`;

  outBox.classList.remove('hidden');
});
