let energy = Number(prompt("del 1 al 10, qué tanta energía crees tener?"));
console.log("en nivel del 1 al 10 de energias tienes un " + energy);
let weather = confirm("el clima esta claro? aceptar para si o cancelar para no");
console.log("el clima está claro o no? " + weather);
let workForce = confirm("tienes mucha carga de trabajo? aceptar para si o cancelar para no");
console.log("tiene carga de trabajo?" + workForce);

switch (true) {
    case (energy >= 7 && weather):
        alert("puedes salir a correr una maratón si deseas!🏃");
        if (workForce) {
            alert("pero antes tienes que hacer tus deberes😑")
        } else {
            alert("no tienes deberes pendientes, luz verde🟢")
        };
        break;
    case (energy >= 4 && weather):
        alert("puedes salir a caminar pero no te vayas lejos, no queremos que te de un patatus!🏃");
        if (workForce) {
            alert("pero antes tienes que hacer tus deberes😑")
        } else {
            alert("no tienes deberes pendientes, luz verde🟢")
        };
        break;
    case (energy < 3 && weather):
        alert("bonito dia, pero mejor quedate viendo netflix🍿");
        if (workForce) {
            alert("pero antes tienes que hacer tus deberes😑")
        } else {
            alert("no tienes deberes pendientes, luz verde🟢")
        };
        break;
    default:
        alert("mejor abrigate y no salgas de casa, que el clima no es de lo mas favorable para salir🤧😷");
}
