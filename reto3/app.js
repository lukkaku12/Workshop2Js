// import {presupuesto, enoughMoney} from "../reto1/app.js";
// import {constructora} from "../reto2/app.js";



alert("welcome")

const presupuesto = 10000000; //10 millones de COP

const foodDaily = 200000;
const transportDaily = 50000;
const entertainmentDaily = 500000;

let enoughMoney = (foodDaily + transportDaily + entertainmentDaily) * 5;

let remainder = presupuesto - enoughMoney;

let colchonSalvaVida = 200000;

let articulosExtra = [];


function constructora(nombre, disponibilidad, precio) {
    return {
        nombreProducto: nombre,
        disponibilidadProducto: disponibilidad,
        precioProducto: precio
    }
}

if (remainder > colchonSalvaVida) {
    alert("tienes presupuesto para comprar algunos artículos extra sin problemas!😎🛍️");
} else {
    alert("Oops, una lástima... Será mejor que no gastes más para emergencias!");
}

//funcion extra, multiples objetos y clasificaremos cuales si le alcanzan y cuales no. Poniendo de primero el mas barato 
let deseaContinuar = true;

function validadorPrecio(remainder, colchon, precioArticulo) {
    let devuelta = remainder - precioArticulo;

    if (devuelta > colchon ) {
        alert("si puedes comprar el producto");
        return true;

    } else {
        alert("no puedes comprarlo, lo lamentamos");
        return false;

    }
}

while (deseaContinuar) {

    let input1 = prompt("cual es el producto que quieres traer?");
    let input2 = Boolean(prompt("está disponible el producto que quieres traer?"));
    let input3 = Number(prompt("cual es el precio del producto?"));

    articulosExtra.push(constructora(input1, input2, input3));

    console.log(articulosExtra)
    deseaContinuar = confirm("deseas continuar? true o false");
};

let candidatosParaLLevar = [];
//necesito agregar si puede llevar el producto 
for (let articulo = 0; articulo < articulosExtra.length; articulo++) {

    const respuestaValidación = validadorPrecio(remainder, colchonSalvaVida, articulosExtra[articulo].precioProducto)
    // si se puede llevar, se guarda en un arreglo con el nombre del producto que puede llevar
    if (respuestaValidación) {
        candidatosParaLLevar.push(
            {nombreArticulo: articulosExtra[articulo].nombreProducto,
            precioArticulo: articulosExtra[articulo].precioProducto}
    )
    } else {
        console.error("no se puede llevar, por lo tanto no se guardará")
    }
    // despues de haber iterado en todos, lo que se planea hacer es que se muestre en consola y de ahi, mostrar cual es el mas barato.
    console.log(`los productos que se pueden llevar son ${candidatosParaLLevar[articulo].nombreArticulo} con su respectivo precio de ${candidatosParaLLevar[articulo].precioArticulo}` );

};

candidatosParaLLevar.sort(function(a,b) {
a.precioArticulo - b.precioArticulo
})

