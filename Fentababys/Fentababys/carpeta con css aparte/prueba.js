document.addEventListener("DOMContentLoaded", function() {
  const btnEnviar = document.getElementById("enviar");
  btnEnviar.addEventListener("click", validarFormulario);
});
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  if (nombre === "") {
    alert("El campo 'Nombre' no puede estar vacío.");
    document.getElementById("nombre").focus();
    return;
  }
  const patronCorreo = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
  if (!patronCorreo.test(correo)) {
    alert("Ingresá un correo electrónico válido.");
    document.getElementById("correo").focus();
    return;
  }
  if (mensaje === "") {
    alert("El campo 'Mensaje' no puede estar vacío.");
    document.getElementById("mensaje").focus();
    return;
  }
  alert("¡Mensaje enviado correctamente!");
}
