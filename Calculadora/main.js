import { calculo} from "./operacione.js";

document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.querySelector("button.btn-success");
  calcularButton.addEventListener("click", function () {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const s = document.getElementById("signo").value.trim();

    const resultado = calculo(a, b, s);
    document.getElementById("resultado").value = resultado;
  });

  const borrarButton = document.getElementById("boton-borrar");
  borrarButton.addEventListener("click", limpiarInputs);
});


function limpiarInputs() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => input.value = "");
}