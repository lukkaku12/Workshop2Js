
//souvenirs de julian

let listaProductos = [];
let variableInicializadora = true;

while (variableInicializadora) {

    let nombreProducto = prompt("nombre del souvenir: ")
    let disponibilidadProducto = Boolean(prompt("está disponible? true o false: "))
    let precioProducto = Number(prompt("cuál es el precio? en COP sin comas ni puntos:"))

    function constructora(nombre, disponibilidad, precio) {
        return {
            nombreProducto: nombre,
            disponibilidadProducto: disponibilidad,
            precioProducto: precio
        }
    }


    const producto = constructora(nombreProducto, disponibilidadProducto, precioProducto)
    listaProductos.push(producto)
    console.log(listaProductos)
    variableInicializadora = confirm("deseas continuar?")
}