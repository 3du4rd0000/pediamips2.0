// 🔁 Variables globales
let totalPreguntasSeleccionadas = 0;
let preguntasRespondidas = 0;
let respuestasCorrectas = 0;
let preguntasActuales = []; // Preguntas seleccionadas aleatoriamente

document.addEventListener("DOMContentLoaded", () => {
  const preguntasBanco = [
    {
      pregunta: "¿Cuál es la primera intervención en un RN que no respira?",
      opciones: [
        "Oxígeno al 100%",
        "Masaje cardíaco",
        "Proveer calor, posicionar, secar y estimular",
        "Administrar adrenalina"
      ],
      correcta: 2,
      justificacion: "Las medidas iniciales son calor, posición, aspiración si es necesario, secado y estimulación."
    },
    {
      pregunta: "¿Qué se considera una frecuencia cardíaca adecuada en un RN al nacer?",
      opciones: ["> 100 lpm", "60-100 lpm", "40-60 lpm", "< 40 lpm"],
      correcta: 0,
      justificacion: "Una frecuencia mayor a 100 lpm es normal. Menos de 100 requiere VPP."
    },
    {
      pregunta: "¿Cuál de las siguientes combinaciones clínicas en un recién nacido indica la necesidad de iniciar inmediatamente los cinco pasos iniciales de reanimación neonatal?",
      opciones: [
        "Edad gestacional ≥ 37 semanas, buen tono muscular, llanto vigoroso",
        "Edad gestacional ≥ 37 semanas, respiración espontánea, coloración rosada",
        "Edad gestacional ≥ 34 semanas, sin respiración espontánea, hipotonía generalizada",
        "Edad gestacional ≥ 35 semanas, buen esfuerzo respiratorio, líquido meconial claro"
      ],
      correcta: 2,
      justificacion: `Se inician los cinco pasos iniciales cuando el RN no parece de término, no respira o está hipotónico.`
    },
    {
      pregunta: "Recién nacido de 39 SDG por parto vaginal eutócico. Al nacer presenta llanto vigoroso, tono flexor activo, y líquido amniótico claro. ¿Cuál es la intervención más apropiada durante el primer minuto de vida?",
      opciones: [
        "Iniciar ventilación con presión positiva con bolsa autoinflable",
        "Aspirar nasofaringe con sonda rígida",
        "Colocar en servocuna, iniciar los 5 pasos iniciales de reanimación",
        "Proporcionar calor, secado, evaluación rápida, y contacto piel con piel con la madre"
      ],
      correcta: 3,
      justificacion: "Los recién nacidos vigorosos requieren solo cuidados básicos y contacto piel con piel."
    },
    {
      pregunta: "Seleccione el orden correcto de los cinco pasos iniciales de reanimación neonatal según el algoritmo del programa NRP 8ª edición (AHA):",
      opciones: [
        "Evaluar FC, aspirar secreciones, secar, iniciar VPP, estimulación",
        "Proveer calor, posicionar vía aérea, secar, aspirar si es necesario, estimular",
        "Colocar oxímetro, aspirar boca y nariz, iniciar compresiones, calentar",
        "Estimular, posicionar vía aérea, iniciar ventilación, secar, colocar en servocuna"
      ],
      correcta: 1,
      justificacion: "Los 5 pasos iniciales son: Calor, posición, secado, aspiración si es necesario y estimulación."
    },
    {
      pregunta: "Recién nacido de 35 SDG, madre con RPM de 24 h y líquido meconial espeso. Nace flácido, sin esfuerzo respiratorio, con FC 90 lpm. ¿Cuál debe ser la conducta inicial?",
      opciones: [
        "Intubación y aspiración traqueal inmediata",
        "Iniciar VPP con aire ambiente",
        "Ventilación con presión positiva con oxígeno al 100%",
        "Administrar surfactante en sala de partos"
      ],
      correcta: 1,
      justificacion: "La VPP inmediata con aire ambiente es la acción inicial indicada, sin intubación de rutina."
    },
    {
      pregunta: "¿Cuál es la saturación preductal de oxígeno objetivo esperada a los 5 minutos de vida?",
      opciones: [
        "60–65%",
        "70–75%",
        "80–85%",
        "90–95%"
      ],
      correcta: 2,
      justificacion: "La meta de saturación preductal a los 5 minutos es 80–85% para evitar hiperoxia temprana."
    }
  ];

  const btnInicio = document.getElementById("iniciar-evaluacion");
  const selectorCantidad = document.getElementById("cantidad-preguntas");
  const contenedorEvaluacion = document.getElementById("evaluacion-contenido");

  btnInicio.addEventListener("click", () => {
    const cantidad = parseInt(selectorCantidad.value);
    const seleccionadas = mezclarArray(preguntasBanco).slice(0, cantidad);
    preguntasActuales = seleccionadas;

    totalPreguntasSeleccionadas = cantidad;
    preguntasRespondidas = 0;
    respuestasCorrectas = 0;

    botonFinalizar.classList.add("hidden");
    botonRecargar.classList.add("hidden");
    contenedorResultado.innerHTML = "";
    contenedorEvaluacion.innerHTML = "";

    seleccionadas.forEach((pregunta, index) => {
      const contenedor = document.createElement("div");
      contenedor.className = "bg-white p-6 rounded-xl shadow mb-6";

      const titulo = document.createElement("h3");
      titulo.className = "text-lg font-semibold text-blue-700 mb-4";
      titulo.textContent = `Pregunta ${index + 1}: ${pregunta.pregunta}`;

      const opciones = document.createElement("div");
      opciones.className = "space-y-2";

      const feedback = document.createElement("div");
      feedback.className = "mt-4 text-sm text-gray-700";

      pregunta.opciones.forEach((opcion, i) => {
        const btn = document.createElement("button");
        btn.className = "block w-full text-left bg-gray-100 hover:bg-blue-100 px-4 py-2 rounded";
        btn.textContent = opcion;

        btn.addEventListener("click", () => {
          pregunta.seleccionUsuario = i;

          Array.from(opciones.children).forEach((b, j) => {
            b.classList.remove("bg-blue-100", "bg-green-100", "bg-red-100");
            if (j === i) b.classList.add("bg-blue-100");
          });

          if (!pregunta.respondida) {
            preguntasRespondidas++;
            pregunta.respondida = true;
          }

          if (preguntasRespondidas === totalPreguntasSeleccionadas) {
            botonFinalizar.classList.remove("hidden");
          }
        });

        opciones.appendChild(btn);
      });

      contenedor.appendChild(titulo);
      contenedor.appendChild(opciones);
      contenedor.appendChild(feedback);
      contenedorEvaluacion.appendChild(contenedor);
    });
  });

  function mezclarArray(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }
});

// 🎯 Finalizar evaluación y mostrar resultado
const botonFinalizar = document.getElementById("finalizar-evaluacion");
const botonRecargar = document.getElementById("recargar")
const contenedorResultado = document.getElementById("resultado-final");

botonFinalizar.addEventListener("click", () => {
  respuestasCorrectas = 0;

  const preguntasMostradas = document.querySelectorAll("#evaluacion-contenido > div");

  preguntasMostradas.forEach((contenedor, index) => {
    const titulo = contenedor.querySelector("h3").textContent.replace(/^Pregunta \d+: /, "");
    const pregunta = preguntasActuales.find(p => p.pregunta === titulo);
    const seleccion = pregunta.seleccionUsuario;

    const botones = contenedor.querySelectorAll("button");
    const feedback = contenedor.querySelector("div.mt-4");

    botones.forEach((btn, i) => {
      btn.disabled = true;

      if (i === pregunta.correcta) {
        btn.classList.add("bg-green-100");
      }

      if (i === seleccion && i !== pregunta.correcta) {
        btn.classList.add("bg-red-100");
      }
    });

    if (seleccion === pregunta.correcta) {
      respuestasCorrectas++;
      feedback.innerHTML = `<p class="text-green-600 font-medium">✅ ¡Correcto!</p><p class="text-sm mt-1">${pregunta.justificacion}</p>`;
    } else {
      feedback.innerHTML = `<p class="text-red-600 font-medium">❌ Incorrecto.</p><p class="text-sm mt-1">${pregunta.justificacion}</p>`;
    }
  });

  const porcentaje = Math.round((respuestasCorrectas / totalPreguntasSeleccionadas) * 100);
  let mensaje = "";

  if (porcentaje >= 90) {
    mensaje = "¡Excelente desempeño! 🎓";
  } else if (porcentaje >= 70) {
    mensaje = "Buen resultado, pero puedes mejorar 📘";
  } else {
    mensaje = "Necesitas repasar el algoritmo 🔁";
  }

  contenedorResultado.innerHTML = `
    <p>Respondiste correctamente <strong>${respuestasCorrectas}</strong> de <strong>${totalPreguntasSeleccionadas}</strong> preguntas.</p>
    <p class="mt-2">Resultado: <span class="text-blue-800 text-xl">${porcentaje}%</span></p>
    <p class="mt-2">${mensaje}</p>
  `;
  
  botonRecargar.classList.remove("hidden");
  botonFinalizar.disabled = true;
});

botonRecargar.addEventListener("click", () => {
  location.reload();
});
