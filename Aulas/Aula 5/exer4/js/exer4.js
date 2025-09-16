function calcularArea(base, altura) {
    return base * altura;
}

document.getElementById("calcularBtn").addEventListener("click", () => {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para base e altura.";
        return;
    }
    const area = calcularArea(base, altura);
    document.getElementById("resultado").innerHTML = `A área do retângulo é ${area.toFixed(2)}`;
});