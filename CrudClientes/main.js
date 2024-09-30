import { crearCliente } from "./clientesManager.js";

// Creamo un a lista que no se va autilizar de momento

let clientesArray = [];

function nuevoCliente(){
 // se utiliza para no limpiar el formulario
    event.preventDefault();
    // creamos el objeto cliente

    const cliente = {
        nombre: document.querySelector('#nombre').value,
        DNI: document.querySelector('#DNI').value,
        movil: document.querySelector('#Movil').value,
        direccion: document.querySelector('#direccion').value,
    };

    // creamos la constante de mensaje 

    const mensaje = crearCliente(cliente);
    document.querySelector('#mensaje').innerHTML = mensaje;
}


window.nuevoCliente = nuevoCliente;