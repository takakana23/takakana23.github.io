// Función para mostrar el correo (puedes cambiarlo por el tuyo)
function mostrarEmail() {
    alert('Puedes enviarme un correo a: tuemail@ejemplo.com');
}

// Función para abrir tus redes sociales
function abrirRedes() {
    window.open('https://www.linkedin.com/in/tu-perfil', '_blank');
    // Agrega más enlaces a tus redes sociales si lo deseas
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Cambia cada 3 segundos
}



const jugador = document.getElementById("jugador");
const cpu = document.getElementById("cpu");
const mensaje = document.getElementById("mensajeCarrera");
const reiniciar = document.getElementById("reiniciar");

let jugadorPos = 0;
let cpuPos = 0;
const meta = 490;
let carreraEnCurso = true;

function moverCpu() {
  if (cpuPos < meta && carreraEnCurso) {
    cpuPos += Math.random() * 8;
    cpu.style.left = cpuPos + "px";

    if (cpuPos >= meta) {
      carreraEnCurso = false;
      mensaje.textContent = "❌ Perdiste, la CPU llegó primero.";
    } else {
      setTimeout(moverCpu, 100);
    }
  }
}

jugador.addEventListener("click", () => {
  if (carreraEnCurso) {
    jugadorPos += 25;
    jugador.style.left = jugadorPos + "px";

    if (jugadorPos >= meta) {
      carreraEnCurso = false;
      mensaje.textContent = "🎉 ¡Ganaste la carrera!";
    }
  }
});

reiniciar.addEventListener("click", () => {
  jugadorPos = 0;
  cpuPos = 0;
  jugador.style.left = "0px";
  cpu.style.left = "0px";
  mensaje.textContent = "";
  carreraEnCurso = true;
  moverCpu();
});

// Inicia la carrera automáticamente
moverCpu();



