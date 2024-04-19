let weather = prompt("esta lluvioso o esta soleado?");
let remainingWeight;

function constructora(name, weight, priority) {
    return {
        nombre:name,
        peso:weight,
        prioridad: priority
    }
}



alert("bienvenido al programa, aqui se revisa que planea equipar en su maleta sin problema alguno");

switch (weather) {
    case "lluvioso":
        alert("mas te vale llevar cosas para abrigarte y protegerte de la lluvia");
        break;
    case "soleado":
        alert("no es necesario llevar paraguas ni nada por el estilo.");
        break;
}

let arranque = confirm("desea empezar?");

let Maleta = []

while (arranque) {

    let nombreItem = prompt("cual es el nombre del item a llevar?");
    let pesoItem = Number(prompt("cuanto pesa el item que va a llevar?"));
    let prioridadItem = Number(prompt("que tan prioritario es el item? del 1 al 3"));

    Maleta.push(constructora(nombreItem, pesoItem, prioridadItem))

    arranque = confirm("deseas continuar?")
}
//haremos el limite de la maleta de 23 kg por lo tanto, todo el peso de cada item debe ser ingresao en kg
const limitePeso = 23

let consultaPeso = confirm("desea confirmar el peso que lleva hasta ahora? el limite de peso es de " + limitePeso + " kg")

let sumaTotal = 0;

if (consultaPeso) {
    Maleta.forEach(itemMaleta => {
        sumaTotal = sumaTotal + itemMaleta.peso; // sumaTotal += itemMaleta.pesoItem
        console.log(sumaTotal)
    });
}

let encadenador = true;

if (sumaTotal < limitePeso) {
    encadenador = confirm("tiene peso sobrante, desesa agregar algo mas?");

    while (encadenador) {
    let nombreItem = prompt("cual es el nombre del item a llevar?");
    let pesoItem = Number(prompt("cuanto pesa el item que va a llevar?"));
    let prioridadItem = Number(prompt("que tan prioritario es el item? del 1 al 3"));

    Maleta.push(constructora(nombreItem, pesoItem, prioridadItem))

    encadenador = confirm("deseas continuar?")
    };

}   else if (sumaTotal > limitePeso) {
    encadenador =  confirm("tiene peso de más, tiene que remover items")

    Maleta.sort((a, b) => a.prioridad - b.prioridad);
    console.log("aqui tiene una lista ordene de menor a mayor prioridad, cual desea eliminar?");
    Maleta.forEach((elemento) => console.log(elemento.nombre));
}