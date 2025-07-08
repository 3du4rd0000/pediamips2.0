    function calcularPercentil() {
      const edad = parseFloat(document.getElementById("edad").value);
      const peso = parseFloat(document.getElementById("peso").value);
      const sexo = document.getElementById("sexo").value;

      if (isNaN(edad) || isNaN(peso)) return;

      // Fórmula estimada para propósitos demostrativos
      // NO sustituye valores de WHO / CDC
      let p50 = 0;
      if (sexo === "masculino") {
        p50 = 3.3 + edad * 0.5; // peso medio aproximado
      } else {
        p50 = 3.2 + edad * 0.48;
      }

      const percentil = Math.round((peso / p50) * 50);

      const box = document.getElementById("resultado");
      box.classList.remove("hidden");

      if (percentil < 5) {
        box.textContent = `Percentil estimado: ${percentil} — Bajo peso`;
        box.className = "bg-red-500 text-white p-4 rounded";
      } else if (percentil >= 5 && percentil <= 85) {
        box.textContent = `Percentil estimado: ${percentil} — Peso adecuado`;
        box.className = "bg-green-500 text-white p-4 rounded";
      } else {
        box.textContent = `Percentil estimado: ${percentil} — Sobrepeso`;
        box.className = "bg-yellow-500 text-white p-4 rounded";
      }
    }