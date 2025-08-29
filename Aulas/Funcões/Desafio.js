function calcularIMC(peso, altura) {
    return peso / (Math.pow(altura,2));
}

function classificarIMC(IMC) {
    // Truque: switch com true, e os cases são condições booleanas
switch (true) {
    case (IMC < 18.5):
        return " Abaixo do peso";
        
    case (IMC >= 18.5 && IMC < 25):
        return " Peso normal";
   
    case (IMC >= 25 && IMC < 30):
        return " Sobrepeso ";
     
    case (IMC >= 30 && IMC < 35):
        return " Obesidade grau 1 ";
      
    case (IMC >= 35 && IMC < 40):
        return " Obesidade grau 2 ";
 
    case (IMC >= 40):
        return " Obesidade grau 3 (mórbida) ";
      
    default:
        return " IMC inválido ";
      
}
}
function main(params) {
    let peso = 60;
    let altura = 1.50;
    let IMC = calcularIMC(peso, altura); // Fórmula certa
    
    console.log(("Seu IMC é: ") + IMC.toFixed(2) + classificarIMC(IMC));

    
}
main();
