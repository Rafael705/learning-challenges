function calcularPagamento() {
    let valor = parseFloat(document.getElementById("valorCompra").value);
    let parcelas = parseInt(document.getElementById("qtdParcelas").value);
    let juros = 0;

    // Verifica se os valores são números válidos
    if (isNaN(valor) || isNaN(parcelas)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        return;
    }

    if (parcelas === 1) {
        juros = 0;
    } else if (parcelas >= 2 && parcelas <= 3) {
        juros = 0.03;
    } else if (parcelas >= 4 && parcelas <= 6) {
        juros = 0.7;
    } else if (parcelas >= 7 && parcelas <= 12) {
        juros = 0.15;
    } else {
        document.getElementById("resultado").innerHTML = "Número de parcelas inválido! Por favor, escolha entre 1 e 12.";
        return;
    }

    let valorComJuros = valor + (valor * juros);
    let valorParcela = valorComJuros / parcelas;

    document.getElementById("resultado").innerHTML =
      `Valor total com juros: R$ ${valorComJuros.toFixed(2)} <br>
       Cada parcela: R$ ${valorParcela.toFixed(2)} (${parcelas}x)`;
}


document.getElementById("calcularBtn").addEventListener("click", calcularPagamento);