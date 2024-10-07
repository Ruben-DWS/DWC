export function agregarParrafo() {
    // 1. - Selecciona el elemento html donde vamos añadir parrafo



    // 2. - Crear elemento HTML p

    let p = document.createElement('p');

    // 3. - Añadir el contenido (lorem) al p

    p.innerText = "Lorem Ipsum";

    // 4. - Añadir el p al elemento seleccionado en el paso 1

    return p;



}


export function aniadirArticulo() {

    let articulo = prompt("Dime un articulo que añadir");



    let li = document.createElement('li');
    

    li.innerText = articulo;

    return li;


}


 export function creaConEstilo(){

   
    let h1 = document.createElement('h1');
 

    h1.innerText = 'Ruben Garcia Verdugo';
    h1.className = 'title';

    return h1;
}