// Codigo para manejar lista de clientes

let clientes = [];

export function addCliente(nombre, correo){

    clientes.push({nombre,correo});

}

export function listaCliente(){
    return clientes;
}