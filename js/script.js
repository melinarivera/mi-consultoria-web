// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Formulario demo
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    formResponse.textContent = "Por favor, completa todos los campos.";
    return;
  }

  formResponse.textContent = "Mensaje enviado correctamente. Esta es una demo visual para portfolio.";
  contactForm.reset();
});