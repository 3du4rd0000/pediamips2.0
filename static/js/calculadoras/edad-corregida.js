// Generar HTML de la calculadora
document.getElementById("calculadora").innerHTML = `
  <div class="bg-white p-6 rounded-xl shadow">
    <h2 class="text-2xl font-semibold text-blue-600 mb-4">Calculadora de Edad Corregida</h2>
    <label class="block mb-2 text-sm text-gray-700">Fecha de nacimiento:</label>
    <input type="date" id="birthDate" class="w-full mb-4 p-2 border rounded">
    <label class="block mb-2 text-sm text-gray-700">Semanas de gestación al nacer:</label>
    <input type="number" id="gestationWeeks" min="23" max="42" value="40" class="w-full mb-4 p-2 border rounded">
    <label class="block mb-2 text-sm text-gray-700">Fecha actual:</label>
    <input type="date" id="currentDate" class="w-full mb-4 p-2 border rounded">
    <button id="calculateBtn" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calcular</button>
    <div id="resultContainer" class="hidden mt-4 bg-blue-100 p-4 rounded">
      <p class="font-semibold text-blue-800">Edad cronológica: <span id="chronologicalAge"></span></p>
      <p class="font-semibold text-blue-800">Edad corregida: <span id="correctedAge"></span></p>
    </div>
  </div>
`;

// Funciones
function calcularEdad(fechaInicio, fechaFin) {
  const diff = fechaFin - fechaInicio;
  const edadDias = diff / (1000 * 60 * 60 * 24);
  return edadDias / 30.44;
}

function mostrarResultados(edadC, edadCorr) {
  const a = Math.floor(edadC / 12), m = Math.round(edadC % 12);
  const a2 = Math.floor(edadCorr / 12), m2 = Math.round(edadCorr % 12);
  document.getElementById("chronologicalAge").textContent = `${a} años y ${m} meses`;
  document.getElementById("correctedAge").textContent = `${a2} años y ${m2} meses`;
  document.getElementById("resultContainer").classList.remove("hidden");
}

function resaltarMes(meses) {
  document.querySelectorAll('[id^="mes-"]').forEach(div => {
    div.classList.remove('resaltado');
  });

  const mes = Math.max(0, Math.min(24, Math.round(meses)));
  const bloque = document.getElementById(`mes-${mes}`);
  if (bloque) {
    bloque.scrollIntoView({ behavior: 'smooth', block: 'center' });
    bloque.classList.add('resaltado');
  }
}

// Eventos
document.getElementById("calculateBtn").addEventListener("click", () => {
  const birth = new Date(document.getElementById("birthDate").value);
  const weeks = parseInt(document.getElementById("gestationWeeks").value);
  const now = new Date(document.getElementById("currentDate").value);
  if (!birth || !now || isNaN(weeks)) return;

  const edadC = calcularEdad(birth, now);
  const premat = 40 - weeks;
  const birthCorr = new Date(birth.getTime() + premat * 7 * 86400000);
  const edadCorr = calcularEdad(birthCorr, now);

  mostrarResultados(edadC, edadCorr);
  resaltarMes(edadCorr);
});

// INTERACCIÓN DE LOS BOTONES "Ver más"
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('toggle-details')) {
      const details = e.target.closest('.relative').querySelector('.milestone-details');
      const isOpen = !details.classList.contains('hidden');
      details.classList.toggle('hidden');
      e.target.textContent = isOpen ? 'Ver más' : 'Ver menos';
    }
  });
