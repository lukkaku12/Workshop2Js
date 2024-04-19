// empezaremos con definir los gastos estaticos del libro, comida y ahorro minimo.

const minSave = Number(prompt("cuanto es el minimo que quieres ahorrar? en COP"));
const priceBook = Number(prompt("cuanto cuesta el libro? en COP"));
const costFood = Number(prompt("cuanto cuesta la comida? en COP"));
const dailyBudget = Number(prompt("cual es tu presupuesto diario? en COP"));


let wholePack = (minSave + priceBook + costFood);

let saveAndFood = (minSave + priceBook);

let saveAndBook = (minSave + costFood);


if (dailyBudget > wholePack) {
    alert("enhorabuena, puedes comprar todo para el día de hoy sin problemas");
} else if (dailyBudget > saveAndFood) {
    alert("puedes comprar nada mas para la comida y para poder ahorrar");
} else if (dailyBudget > saveAndBook) {
    alert("puedes comprar nada mas para el libro y para poder ahorrar");
} else if (dailyBudget > minSave) {
    alert("al parecer solo puedes ahorrar para mañana...")
} else {
    alert("no tienes para siquiera ahorrar...")
}