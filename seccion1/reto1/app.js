
let continuarUsuario = true 

const destino = prompt("Cual es su destino?");
alert(`su destino es ${destino}`);
let dias = Number(prompt("Cuántos días se va a qudar en su destino?"));
alert(`la estadia va a ser de ${dias}`);
let presupuesto = Number(prompt("Cuánto va a ser tu presupuesto? en COP sin puntos ni comas"));
alert(`el presupuesto va a ser de ${presupuesto}`);


const foodDaily = 200000;
const transportDaily = 50000;
const entertainmentDaily = 500000;


let enoughMoney = (foodDaily + transportDaily + entertainmentDaily) * dias;


while (continuarUsuario) {
let variableUsuario = prompt("cual desea editar? destino, dias o presupuesto")


    switch (variableUsuario) {
        case "destino":
            alert("no se puede editar, por favor revise nuevamente");
            break;
        case "dias":
            dias = prompt("Cuántos días se va a quedar en su destino?");
            break;
        case "presupuesto":
            presupuesto = prompt("cual va a ser el nuevo presupuesto en destino?");
            break;

    }

    if (presupuesto >= enoughMoney) {
        alert("Suficiente presupuesto")
    } else {
        alert("No es suficiente presupuesto, por favor corregir")
    
    }

continuarUsuario = confirm("deseas continuar editando tu planificacion?")
    
}





export {presupuesto, enoughMoney};