const lampada = document.getElementById("lampada");
const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const contadorSpan = document.getElementById("contador");

let ligada = false;
let contador = 0;

ligar.addEventListener("click", () => {
  if (!ligada) {
    lampada.src = "assets/image/luz-acesa.png";
    ligada = true;
    contar();
  }
});

desligar.addEventListener("click", () => {
  if (ligada) {
    lampada.src = "assets/image/luz-apagada.png";
    ligada = false;
    contar();
  }
});

function contar() {
  contador++;
  contadorSpan.textContent = contador;

  if (contador >= 100) {
    lampada.src = "assets/image/explosion-explode.gif"; // precisa dessa imagem
    ligar.disabled = true;
    desligar.disabled = true;
  }
}
