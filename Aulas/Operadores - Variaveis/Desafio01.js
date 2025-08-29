let precoCombustivel = 5.79;
let kmPorLitro = 10;
let distancia = 100;

let gastoTotal = (distancia/kmPorLitro) * precoCombustivel;

console.log("O gasto total da viagem é R$ " + gastoTotal.toFixed(2));