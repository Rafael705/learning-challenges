// Calcula o IMC
function calcularIMC(peso, altura) {
    return peso / (Math.pow(altura, 2));
}

// Classifica o IMC usando switch com boolean
function classificarIMC(IMC) {
    switch (true) {
        case (IMC < 18.5):
            return "Abaixo do peso";
        case (IMC >= 18.5 && IMC < 25):
            return "Peso normal";
        case (IMC >= 25 && IMC < 30):
            return "Sobrepeso";
        case (IMC >= 30 && IMC < 35):
            return "Obesidade grau 1";
        case (IMC >= 35 && IMC < 40):
            return "Obesidade grau 2";
        case (IMC >= 40):
            return "Obesidade grau 3 (mórbida)";
        default:
            return "IMC inválido";
    }
}

// Verifica a idade
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior";
    } else {
        return "Menor";
    }
}

// Monta o nome e status de idade
function myName(name, idade) {
    return name + " Pontes - " + verificarIdade(idade);
}

// Função principal
function main() {
    let nome = "Rafael";
    let idade = 19;
    let peso = 70;
    let altura = 1.73;

    let IMC = calcularIMC(peso, altura);
    let classificacao = classificarIMC(IMC);

    console.log(myName(nome, idade));
    console.log("Seu IMC é: " + IMC.toFixed(2) + " (" + classificacao + ")");
}

main();
