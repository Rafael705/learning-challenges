document.querySelector("#btnCalcular").addEventListener("click", function() {
    let num = parseFloat(document.querySelector("#numero").value);
    if (isNaN(num) || num <= 0) {
        alert("Por favor, insira um número positivo válido.");
        return;
    }
    let resultado = somaAteN(num);
    document.getElementById('resultado').value = resultado;
});   

function somaAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }   
    return soma;
}
