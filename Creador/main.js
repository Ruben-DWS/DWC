import { crearImg, crearLista, crearParrafo, crearTabla } from "./creador.js";



const tablaBoton = document.querySelector('#tablaBoton');

const listaBoton = document.querySelector('#listaBoton');

const imgBoton = document.querySelector('#imgBoton');

const parrafoBoton = document.querySelector('#parrafoBoton')

tablaBoton.addEventListener('click', () => crearTabla());

listaBoton.addEventListener('click', () => crearLista());

imgBoton.addEventListener('click', () => crearImg());

parrafoBoton.addEventListener('click', () => crearParrafo());