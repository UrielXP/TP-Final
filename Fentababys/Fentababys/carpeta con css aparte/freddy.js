document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('goFreddy');
    const sonido = document.getElementById('sonidoFreddy');

    btn.addEventListener('click', () => {
        window.location.href = "freddy.html"; 
    });

    // Intenta reproducir sonido al mouse
    btn.addEventListener('mouseenter', () => {
        sonido.currentTime = 0;
        sonido.play().catch(() => {
            console.log("Audio bloqueado por el navegador, haz click primero en la página");
        });
    });
});
