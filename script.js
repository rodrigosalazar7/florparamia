const petalos = document.querySelectorAll(".petalo");
const centro = document.getElementById("centro");
const foto = centro.querySelector("img");
const texto = document.getElementById("textoFinal");
const mensaje = document.getElementById("mensaje");

let iniciado = false;

// Puedes hacer clic en el mensaje o en la flor
mensaje.addEventListener("click", iniciar);
centro.addEventListener("click", iniciar);

async function iniciar() {

    if (iniciado) return;
    iniciado = true;

    // Ocultar el mensaje
    mensaje.style.opacity = "0";

    // Abrir pétalos uno por uno
    for (let i = 0; i < petalos.length; i++) {

        petalos[i].classList.add("show");

        petalos[i].style.transform =
            `rotate(${i * 45}deg) scale(1)`;

        await esperar(180);

    }

    // Mostrar la foto
    foto.style.opacity = "1";

    await esperar(500);

    // Mostrar el texto
    texto.style.opacity = "1";

    // Comenzar lluvia de corazones
    lluviaCorazones();

}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function lluviaCorazones() {

    setInterval(() => {

        const corazon = document.createElement("div");

        corazon.className = "corazon";

        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * window.innerWidth + "px";

        corazon.style.fontSize =
            (20 + Math.random() * 25) + "px";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);

    }, 300);

}