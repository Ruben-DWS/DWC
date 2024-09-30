


export function calculo(a, b, s) {
    let resultado = 0;
  
    switch (s) {
      case "+":
        resultado = a + b;
        break;
      case "-":
        resultado = a - b;
        break;
      case "*":
        resultado = a * b;
        break;
      case "/":
        if (b !== 0) {
          resultado = a / b;
        } else {
          alert("No se puede dividir entre 0");
          return;
        }
        break;
      default:
        alert("Por favor ingresa un signo válido (+, -, *, /)");
        return;
    }
     
    

    return resultado;

    
  }




  export function mostrarHistorial(respuesta) {

    let ul = document.querySelector("#ListaResultao");
    let li = document.createElement('li');
    li.innerHTML = respuesta;
    ul.appendChild(li);

}   