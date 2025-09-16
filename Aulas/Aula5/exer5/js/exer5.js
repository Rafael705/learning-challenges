function categoriaImc(imc, se) {
    if (se === 'M/m') {
        if (imc < 20.7) return 'Abaixo do peso';
        else if (imc < 26.4) return 'Peso ideal';
        else if (imc < 27.8) return 'Pouco acima do peso';
        else if (imc < 31.1) return 'Acima do peso';
        else return 'Obeso';
    } else if (se === 'F/f') {
        if (imc < 19.1) return 'Abaixo do peso';
        else if (imc < 25.8) return 'Peso ideal';
        else if (imc < 27.3) return 'Pouco acima do peso';
        else if (imc < 32.3) return 'Acima do peso';
        else return 'Obeso';    
    } else {
        return 'Sexo inválido! Use "M/m" para masculino ou "F/f" para feminino.';
    }
}

document.getElementById("calcularBtn").addEventListener("click", () => {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const sexoInput = document.querySelector('input[name="sexo"]:checked');
    const sexo = sexoInput ? sexoInput.value.toUpperCase() : "";
    const resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || !sexo) {
        resultado.innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }
    const imc = peso / (altura * altura);
    const categoria = categoriaImc(imc, sexo);
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
});
