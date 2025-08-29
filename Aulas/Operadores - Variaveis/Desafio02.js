const gasolina = 5.79;
const etanol = 3.70
const kmPorLitro = 10;
const distancia = 100;

let tipoDecombustivel = 'etanol';
let gastoTotal;

if (tipoDecombustivel === "gasolina") {
    gastoTotal = (distancia / kmPorLitro) * gasolina;
} 
else if (tipoDecombustivel === "etanol") {
    gastoTotal = (distancia / kmPorLitro) * etanol;
} 
else {
    console.log("Tipo de combustível inválido!");
}
    console.log("O gasto total da viagem é R$ " + gastoTotal.toFixed(2));

