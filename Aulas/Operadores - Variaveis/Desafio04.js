let peso = 100;
let altura = 1.50;
let IMC = peso / (Math.pow(altura,2)); // Fórmula certa

// Truque: switch com true, e os cases são condições booleanas
switch (true) {
    case (IMC < 18.5):
        console.log("Abaixo do peso");
        break;
    case (IMC >= 18.5 && IMC < 25):
        console.log("Peso normal");
        break;
    case (IMC >= 25 && IMC < 30):
        console.log("Sobrepeso");
        break;
    case (IMC >= 30 && IMC < 35):
        console.log("Obesidade grau 1");
        break;
    case (IMC >= 35 && IMC < 40):
        console.log("Obesidade grau 2");
        break;
    case (IMC >= 40):
        console.log("Obesidade grau 3 (mórbida)");
        break;
    default:
        console.log("IMC inválido");
        break;
}

console.log("Seu IMC é: " + IMC.toFixed(2));
