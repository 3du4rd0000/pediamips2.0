    function calcularIMC() {
      const peso = parseFloat(document.getElementById('peso').value);
      const talla = parseFloat(document.getElementById('talla').value) / 100;
      if (isNaN(peso) || isNaN(talla) || talla <= 0) return;
      const imc = peso / (talla * talla);
      const resultado = document.getElementById("resultado");
      resultado.classList.remove("hidden");
      resultado.textContent = `IMC estimado: ${imc.toFixed(2)} kg/m² — interpreta según edad y sexo.`;
      resultado.className = "bg-blue-500 text-white p-4 rounded text-center font-medium";
    }
