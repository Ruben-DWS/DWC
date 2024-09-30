
/* Con el import importamos los metodos de opracion.js */


import { addCliente, listaCliente } from "./clientes.js";
import { suma, resta, PI } from "./operacion.js";


let numero1 = 23;
let numero2 = 3;
let resultado = suma(numero1,numero2);
console.log(resultado)
console.log(PI)

addCliente('Juan Mariachi','mariachi@gmail.com');
addCliente('Solomeo Paredes','solomeo@gmail.com');


console.log(listaCliente());