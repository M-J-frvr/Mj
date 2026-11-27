document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el último botón de la página
    const botones = document.querySelectorAll("button");
    const ultimoBoton = botones[botones.length - 1];

    const elementos = ["❤️", "💖", "💗", "💓", "🖤", "🌸", "✨", "🎉", "🎊"];
    const coloresConfeti = ["#ffd1dc", "#ff8da1", "#c2185b", "#ffffff"];

    ultimoBoton.addEventListener("click", () => {
        // Cantidad de partículas por clic
        const cantidad = 45;

        for (let i = 0; i < cantidad; i++) {
            crearParticula();
        }
    });

    function crearParticula() {
        const particula = document.createElement("div");
        particula.classList.add("particula-lluvia");

        // Alterna entre emojis de corazón/fiesta y papelitos de confeti
        const esEmoji = Math.random() > 0.35;

        if (esEmoji) {
            particula.textContent = elementos[Math.floor(Math.random() * elementos.length)];
            particula.style.fontSize = Math.random() * 18 + 18 + "px"; // Entre 18px y 36px
        } else {
            particula.style.width = Math.random() * 8 + 6 + "px";
            particula.style.height = Math.random() * 12 + 6 + "px";
            particula.style.backgroundColor = coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)];
            particula.style.borderRadius = "3px";
        }

        // Posición horizontal aleatoria en toda la pantalla
        particula.style.left = Math.random() * 100 + "vw";

        // Duración y retraso aleatorio para efecto natural de lluvia
        const duracion = Math.random() * 2 + 2; // Entre 2s y 4s
        const retraso = Math.random() * 0.6;
        particula.style.animationDuration = duracion + "s";
        particula.style.animationDelay = retraso + "s";

        document.body.appendChild(particula);

        // Elimina el elemento del DOM cuando termina la animación para no alentar el teléfono
        setTimeout(() => {
            particula.remove();
        }, (duracion + retraso) * 1000);
    }
});
