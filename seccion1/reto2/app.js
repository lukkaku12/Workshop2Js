
//souvenirs de julian


let variableInicializadora = true;
let listaProductos = [];
let nombreProducto;
let disponibilidadProducto;
let precioProducto;


function constructora(nombre, disponibilidad, precio) {
    return {
        nombreProducto: nombre,
        disponibilidadProducto: disponibilidad,
        precioProducto: precio
    }
}

while (variableInicializadora) {
    
    
    nombreProducto = prompt("nombre del souvenir: ")
    disponibilidadProducto = Boolean(prompt("está disponible? true o false: "))
    precioProducto = Number(prompt("cuál es el precio? en COP sin comas ni puntos:"))

    


    const producto = constructora(nombreProducto, disponibilidadProducto, precioProducto)
    listaProductos.push(producto)
    console.log(listaProductos)
    
    

    variableInicializadora = confirm("deseas continuar?")
}

for (let i = 0; i <= listaProductos.length; i++) {
    console.log(typeof(listaProductos[i].nombreProducto),typeof(listaProductos[i].disponibilidadProducto), typeof(listaProductos[i].precioProducto))

}


export {constructora};