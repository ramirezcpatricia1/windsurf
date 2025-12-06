document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inscriptionForm");
  const mensaje = document.getElementById("mensaje");

  // Registros fijos iniciales
  const registrosBase = [
    {
      Nombre: "Lalo",
      Apellido: "Ramirez",
      Edad: 19,
      Correo: "l19@gmail.com",
    },
    {
      Nombre: "Talo",
      Apellido: "Ramirez",
      Edad: 20,
      Correo: "tato20@gmail.com",
    },
    {
      Nombre: "Pato",
      Apellido: "Ramirez",
      Edad: 15,
      Correo: "pato15@gmail.com",
    },
  ];

  // Aquí iremos guardando los registros adicionales capturados desde el formulario
  const registrosExtras = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = parseInt(document.getElementById("edad").value, 10);
    const email = document.getElementById("email").value.trim();

    if (!nombre || !apellido || !email || Number.isNaN(edad)) {
      mostrarMensaje("Por favor completa todos los campos correctamente.", "error");
      return;
    }

    if (edad < 0) {
      mostrarMensaje("La edad no puede ser negativa.", "error");
      return;
    }

    // Agregar el nuevo registro a la lista de extras
    registrosExtras.push({
      Nombre: nombre,
      Apellido: apellido,
      Edad: edad,
      Correo: email,
    });

    // Combinar todos los registros (base + extras)
    const todos = [...registrosBase, ...registrosExtras];

    // Mezclar aleatoriamente (Fisher-Yates)
    const mezcla = [...todos];
    for (let i = mezcla.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mezcla[i], mezcla[j]] = [mezcla[j], mezcla[i]];
    }

    // Texto con todos los nombres en orden aleatorio
    const listaNombres = mezcla
      .map((r) => `${r.Nombre} ${r.Apellido} (${r.Edad} años)`)
      .join(", ");

    try {
      // Crear hoja y libro de Excel con todos los registros
      const ws = XLSX.utils.json_to_sheet(todos);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Registro");

      XLSX.writeFile(wb, "registro_poblacion_clase.xlsx");

      mostrarMensaje(
        `Nombres en orden aleatorio: ${listaNombres}.\nSe ha generado y descargado el Excel con todos los registros.`,
        "exito"
      );

      form.reset();
    } catch (error) {
      console.error(error);
      mostrarMensaje("Ocurrió un error al generar el archivo Excel.", "error");
    }
  });

  function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.classList.remove("oculto", "exito", "error");
    mensaje.classList.add(tipo === "exito" ? "exito" : "error");
  }
});
