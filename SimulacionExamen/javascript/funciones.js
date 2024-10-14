export function creaImagen() {
    // Función que crea un elemento imagen, completa sus clases y el src (puedes usar la imagen adjunta u otra)

    let img = document.createElement('img');
    img.src = "./imagenes/elcano.jpg";
    img.classList = 'img-fluid overflow-hidden'
    img.style.maxHeight = '400px';
    
    return img

    // Devuelve el elemento imagen
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    // Crea una tabla con los datos de este array


    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = "Categoría";                // Creo la tabla y le añado los dos titulos Categoria y velocidad
    const th2 = document.createElement('th');
    th2.innerText = "Velocidad";
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);

    arrayHuracanes.forEach (info => {

        const trFor = document.createElement('tr') // creo un tr nuevo para introducir todos los datos de la lista arrayHuracanes
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerText = info.cat; // Añado el texto dentro de cat y de vel
        td2.innerText = info.vel;
        trFor.appendChild(td1);
        trFor.appendChild(td2);  // Se lo añado al tr creado
        table.appendChild(trFor);


    })

    table.className = 'table';

    return table;

}

export function creaParrafo() {

    let p = document.createElement("p");

    p.innerText = "Mi nombre es Máximo Décimo Meridio, comandante de las tropas del norte, general de las legiones Félix, leal servidor del verdadero emperador, Marco Aurelio. Padre de un hijo asesinado, marido de una mujer asesinada, y alcanzaré mi venganza, en esta vida o en la otra"

    return p;
    // Crea un párrafo con texto genérico   
}

 export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve

    let ul = document.createElement('ul');
    ul.className = 'list-group'

    lista.forEach(a => {
        
        let li = document.createElement('li')
        li.className  = 'list-group-item'
        li.innerText = a;
        ul.appendChild(li);

    });

    return ul;

}