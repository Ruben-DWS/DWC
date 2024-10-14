// Añadir las importaciones de las funciones que crean la imagen, la tabla, el párrafo y l lista

import { creaImagen, creaLista, creaParrafo, creaTabla } from "./funciones.js";

// Variables para guardar la zona y la entrada
let zona = '';
let entrada = '';
let limpio = '';

// Esta función guarda la zona seleccionada
function seleZona() {

    

    let select = document.getElementById('zona')

    let opcion = select.value;

    let buttonApli = document.getElementById('aplicar')

    

    // Selecciona la zona del select elegir zona y lo guarda
     zona = opcion;    
    // Si hay entrada, habilito el botón aplicar
    

    if (entrada == "") {

        buttonApli.disabled = true;
        
    }else{
        buttonApli.disabled = false;
    }

}

// Esta función guarda la entrada seleccionada
function seleInput() {
    // Selecciona la entrada del select elegir entrada y la guarda
    
    let selectEntrada = document.getElementById('entrada');
    let opcion = selectEntrada.value;
    let buttonApli = document.getElementById('aplicar')
    entrada = opcion;

    console.log(entrada)
    // Si hay zona elegida, hablitar el botón aplicar
    
    if (zona == "") {
        
        buttonApli.disabled = true;
    }else{
        buttonApli.disabled = false;
    }

}

/* La función enviar llama a la función importada según 
la entrada seleccionada y lo coloca en la zona seleccionada. */
function enviar() {
    // Limpiar la zona seleccionada (para que no se coloquen más de una entrada en la zona)



    switch (entrada) {
        case "p":
            document.getElementById(zona).innerText = limpio;
            document.getElementById(zona).append(creaParrafo());
            break;
        
        case "list":
            document.getElementById(zona).innerText = limpio;
            document.getElementById(zona).append(creaLista());
        case "img":
            document.getElementById(zona).innerText = limpio;
            document.getElementById(zona).append(creaImagen());
        case "table":
            document.getElementById(zona).innerText = limpio;
            document.getElementById(zona).append(creaTabla());
        default:
            break;
    }
    /* comprueba cual es la zona seleccionada y ejecuta la función de creación
    correspondiente (switch)*/
}


function limpiarTodo(){

    document.getElementById('A').innerText=limpio;
    document.getElementById('B').innerText=limpio;
    document.getElementById('C').innerText=limpio;
    document.getElementById('D').innerText=limpio;

    document.getElementById('aplicar').disabled = true;

    document.getElementById('entrada').value = "Selección de Entrada"
    document.getElementById('zona').value = "Selección de zona"


}



// Asignación de funciones al objeto window

window.seleZona = seleZona;
window.seleInput = seleInput;
window.enviar = enviar;
window.limpiarTodo = limpiarTodo;
