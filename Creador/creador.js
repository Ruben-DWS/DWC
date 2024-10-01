export function crearTabla() {

    // Creo la cabecera 

    let thead = document.querySelector('thead');
    let trh = document.createElement('tr');
    let thNombre = document.createElement('th');
    thNombre.innerText = 'Nombre';
    trh.appendChild(thNombre);
    let thApellido = document.createElement('th');
    thApellido.innerText = 'Apellido';
    trh.appendChild(thApellido);
    let thEdad = document.createElement('th');
    thEdad.innerText = 'Edad';
    trh.appendChild(thEdad);
    thead.appendChild(trh);

    // Creo el body

    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    let tr = document.createElement('tr');
    let tdNombre = document.createElement('td');
    let tdApellidos = document.createElement('td');
    let tdEdad = document.createElement('td');

    tdNombre.innerText = 'Paco';
    tdApellidos.innerText = 'Sanz';
    tdEdad.innerText = '25 años'

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellidos);
    tr.appendChild(tdEdad);
    tbody.appendChild(tr);



}


export function crearLista() {

    let ol = document.querySelector('ol');
    let li1 = document.createElement('li');
    li1.innerText = 'Paco'
    li1.className = 'list-group-item';
    ol.appendChild(li1);

    let li2 = document.createElement('li');
    li2.innerText = 'Sanz'
    li2.className = 'list-group-item';
    ol.appendChild(li2);
}

export function crearImg() {

    let div = document.querySelector('#img');
    let img = document.createElement('img');
    img.src = './img/mario-1558012_1280.jpg';
    img.width = 300;
    img.height = 200;
    div.appendChild(img);


}


export function crearParrafo() {


    let div = document.querySelector('#parraf');
    let parraf = document.createElement('p');
    parraf.innerText = 'Mi nombre es Máximo Décimo Meridio, comandante de los ejércitos del norte, general de las Legiones Fénix, fiel servidor del verdadero emperador Marco Aurelio. Padre de un hijo asesinado, esposo de una esposa asesinada y juro que me vengaré, en esta vida o en la otra'

    div.appendChild(parraf);

}