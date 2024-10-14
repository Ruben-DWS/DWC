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

    let div = document.querySelector('#divEstilo');
   
    

    let h1 = document.createElement('h1');

    div.style.color = 'red';

    h1.appendChild(creaConEstilo());

    div.appendChild(h1);

    cambiarSyle();
}

function cambiarSyle(){
    let div = document.querySelector('#divEstilo');
    let button = document.querySelector('#crearStyle');

    if(div.style.color == 'red'){

        div.style.color == 'blue';
        button.textContent = 'Cambia a Rojo'

    }else{
         div.style.color == 'red';
        button.textContent = 'Cambia a Azul'
    }

}









