import { listaArticulo } from "./funcione.js";


function cargarLista(){

    let lista = listaArticulo();

    let ol = document.querySelector('ol');


    lista.forEach(articulos => {
        
        let li = document.createElement('li');
        li.className='list-group-item';
        li.innerHTML = 'ID: '+ articulos.id + ' ' + 'Nombre: '+articulos.name + ' '+ 'Color: '+articulos.color + ' '+ 'PVP: '+ articulos.pvp;
        ol.appendChild(li) ;


    });



}

window.onload=cargarLista();
