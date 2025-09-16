function verificaNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, insira um número válido.";
        return;
    }
    if (numero / 2 === 0) { 
        resultado.innerHTML = "O número " + numero + " é par.";
    } else {
        resultado.innerHTML = "O número " + numero + " é ímpar.";
    }
    document.getElementById("resultado").innerHTML =
        `O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}.`;
}
document.getElementById("verificarBtn").addEventListener("click", verificaNumero);
