const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const btnActualizar = document.getElementById("btnActualizar");

const clientesActivos = document.getElementById("clientesActivos");
const ingresosMensuales = document.getElementById("ingresosMensuales");
const proyectosAbiertos = document.getElementById("proyectosAbiertos");
const crecimiento = document.getElementById("crecimiento");

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

btnActualizar.addEventListener("click", function () {
  clientesActivos.textContent = "136";
  ingresosMensuales.textContent = "€9,120";
  proyectosAbiertos.textContent = "21";
  crecimiento.textContent = "+15%";

  btnActualizar.textContent = "Actualizado";
  btnActualizar.disabled = true;
});