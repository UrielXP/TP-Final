document.addEventListener("DOMContentLoaded", function() {
  const modoBtn = document.getElementById("modoBtn");
  if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("modo-oscuro");
    modoBtn.textContent = "☀️ Modo claro";
  }
  modoBtn.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
    if (document.body.classList.contains("modo-oscuro")) {
      modoBtn.textContent = "☀️ Modo claro";
      localStorage.setItem("modo", "oscuro");
    } else {
      modoBtn.textContent = "🌙 Modo oscuro";
      localStorage.setItem("modo", "claro");
    }
  });
});
