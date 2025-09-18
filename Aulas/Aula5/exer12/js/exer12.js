document.querySelector("#btnCalcular").addEventListener("click", function() {
    let num = parseFloat(document.querySelector("#salario").value);
    if (isNaN(num) || num <= 0) {
        alert("Por favor, insira um número positivo válido.");
        return;
    }
    let resultado = impostoRenda(num);
    document.getElementById('imposto').value = resultado.toFixed(2);
});

function impostoRenda(salario) {
    let imposto = 0;
    if (salario <= 1434.00) {
        imposto = 0;
    }
    else if (salario == 1434.01 || salario <= 2150.00) {
        imposto = salario * 0.070;
    }
    else if (salario == 2150.01 || salario <= 2866.00) {
        imposto = salario * 0.150;
    }
    else if (salario == 2866.01 || salario <= 3582.00) {
        imposto = salario * 0.225;
    }
    else {
        imposto = salario * 0.275;
    }
    return imposto;
}