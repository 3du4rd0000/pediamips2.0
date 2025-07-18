/**
 * gastro.js  –  sub-tabs con slide horizontal + calculadora
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Slides horizontales ---- */
  const tabs   = [...document.querySelectorAll('.subtab')];
  const track  = document.getElementById('slides');
  let current  = 0;

  function goTo(idx) {
    current = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;

    tabs.forEach((btn, i) => {
      btn.classList.toggle('bg-blue-200', i === idx);
      btn.classList.toggle('font-semibold', i === idx);
    });

    /* Opcional: desplazar a la parte superior del módulo */
    const top = document.getElementById('subnav').offsetTop;
    window.scrollTo({ top: top - 16, behavior: 'smooth' });
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => goTo(+btn.dataset.idx));
  });

  /* ---- Calculadora Planes de Hidratación ---- */
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

});
