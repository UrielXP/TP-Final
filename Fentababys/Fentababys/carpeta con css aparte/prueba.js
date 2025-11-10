document.addEventListener("DOMContentLoaded", function() {
  const btnEnviar = document.getElementById("enviar");
  btnEnviar.addEventListener("click", validarFormulario);
});

function validarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("error-nombre");
  const errorCorreo = document.getElementById("error-correo");
  const errorMensaje = document.getElementById("error-mensaje");
  const mensajeExito = document.getElementById("exito");

  [nombre, correo, mensaje].forEach(campo => campo.classList.remove("error"));
  [errorNombre, errorCorreo, errorMensaje].forEach(msg => msg.textContent = "");
  mensajeExito.style.display = "none";

  let valido = true;

  const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  const patronCorreo = /^[^@\s]+@gmail\.com$/;

  
  if (nombre.value.trim() === "") {
    nombre.classList.add("error");
    errorNombre.textContent = "El campo 'Nombre' no puede estar vacío.";
    valido = false;
  } else if (!patronNombre.test(nombre.value.trim())) {
    nombre.classList.add("error");
    errorNombre.textContent = "El nombre solo puede contener letras y espacios.";
    valido = false;
  }

  
  if (correo.value.trim() === "") {
    correo.classList.add("error");
    errorCorreo.textContent = "El campo 'Correo' no puede estar vacío.";
    valido = false;
  } else if (!patronCorreo.test(correo.value.trim())) {
    correo.classList.add("error");
    errorCorreo.textContent = "El correo debe ser válido y terminar en @gmail.com.";
    valido = false;
  }

  
  if (mensaje.value.trim() === "") {
    mensaje.classList.add("error");
    errorMensaje.textContent = "El campo 'Mensaje' no puede estar vacío.";
    valido = false;
  }


  if (valido) {
    mensajeExito.textContent = "¡Mensaje enviado correctamente!";
    mensajeExito.style.display = "block";
  }
}
