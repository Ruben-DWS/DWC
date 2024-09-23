let respuesta = [];

function calcular() {

    var valor1 = parseFloat(document.getElementById("num1").value);
    var valor2 = parseFloat(document.getElementById("num2").value);
    var signo = document.getElementById("signo").value.trim();
    var resultado = 0;


    if (signo === "x" || signo === "*") {
        resultado = valor1 * valor2;
    } else if (signo === "+") {
        resultado = valor1 + valor2;
    } else if (signo === "-") {
        resultado = valor1 - valor2;
    } else if (signo === "/") {
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
        } else {
            alert("No se puede dividir entre 0");
            return;
        }
    } else {
        alert("Por favor ingresa un signo válido (+, -, *, /)");
        return;
    }

    document.getElementById("resultado").value = resultado;
    respuesta = valor1 + signo + valor2 + "=" + resultado;





    mostrarHistorial(respuesta);
}




function mostrarHistorial(respuesta) {

    let ul = document.querySelector("#ListaResultao");
    let li = document.createElement('li');
    li.className = "list-group-item text-start";
    li.innerHTML = respuesta;
    ul.appendChild(li);

}