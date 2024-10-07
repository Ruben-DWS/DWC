import { agregarParrafo, aniadirArticulo, creaConEstilo } from "./funciones.js"

window.onload = menu;


function menu(){

    let boton1 = document.getElementById('AgregarParrafo')
    let boton2 = document.getElementById('AgregarArticulo')
    let boton3 = document.getElementById('crearStyle')

    boton1.addEventListener('click', mainagregarParrafo);

    boton2.addEventListener('click', mainagregarArticulo);

    boton3.addEventListener('click', maincrearStyle);

}

function mainagregarParrafo(){

    let div  = document.querySelector('#contenedor');

    div.appendChild(agregarParrafo());

}


function mainagregarArticulo(){

    let ul = document.querySelector('ul');

    ul.appendChild(aniadirArticulo());

}

function maincrearStyle(){

    let div = document.createElement('div');
    let body = document.querySelector('body');

    div.appendChild(creaConEstilo());
    body.appendChild(div);


}









