function calcularPC() {
    const edad = parseFloat(document.getElementById('edadMeses').value);
    const sexo = document.getElementById('sexo').value;
    const pc = parseFloat(document.getElementById('pc').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(edad) || isNaN(pc)) {
      resultado.className = "text-red-700 bg-red-100 p-4 rounded mt-6";
      resultado.textContent = "Por favor, ingresa valores válidos.";
      resultado.classList.remove("hidden");
      return;
    }
  
    const data = {
      masculino: [
        { edad: 0, media: 34.5, sd: 1.5 },
        { edad: 1, media: 37.5, sd: 1.3 },
        { edad: 3, media: 41.0, sd: 1.2 },
        { edad: 6, media: 43.5, sd: 1.1 },
        { edad: 12, media: 46.0, sd: 1.0 },
        { edad: 24, media: 48.5, sd: 1.0 }
      ],
      femenino: [
        { edad: 0, media: 34.0, sd: 1.5 },
        { edad: 1, media: 36.8, sd: 1.3 },
        { edad: 3, media: 40.2, sd: 1.2 },
        { edad: 6, media: 43.0, sd: 1.1 },
        { edad: 12, media: 45.5, sd: 1.0 },
        { edad: 24, media: 47.8, sd: 1.0 }
      ]
    };
  
    const tabla = data[sexo];
    let referencia = tabla[0];
    for (let i = 1; i < tabla.length; i++) {
      if (Math.abs(tabla[i].edad - edad) < Math.abs(referencia.edad - edad)) {
        referencia = tabla[i];
      }
    }
  
    const z = (pc - referencia.media) / referencia.sd;
    let clasificacion = "";
    if (z < -2) clasificacion = "Microcefalia";
    else if (z > 2) clasificacion = "Macrocefalia";
    else clasificacion = "Perímetro Cefálico dentro de parámetros normales";
  
    resultado.className = "bg-blue-100 text-blue-800 p-4 rounded mt-6";
    resultado.innerHTML = `
      <strong>Z score:</strong> ${z.toFixed(2)}<br>
      <strong>Interpretación:</strong> ${clasificacion}
    `;
    resultado.classList.remove("hidden");
  }
  