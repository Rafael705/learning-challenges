let num = document.getElementById("num1");
let num2 = document.getElementById("num2");
let form = document.getElementById("form-container");
let resultDiv = document.getElementById("result");
let operationButtons = document.querySelectorAll("#operation button");
let selectedOperation = null;

operationButtons.forEach(button => {
    button.addEventListener("click", function() {
        selectedOperation = this.value;
        operationButtons.forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let number1 = parseFloat(num.value);
    let number2 = parseFloat(num2.value);
    let result; 
    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = "Por favor, insira números válidos.";
        return;
    }
    switch (selectedOperation) {
        case "add":
            result = number1 + number2; 
            break;
        case "subtract":
            result = number1 - number2; 
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            if (number2 === 0) {
                resultDiv.textContent = "Erro: Divisão por zero não é permitida.";
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultDiv.textContent = "Operação desconhecida.";
            return;
    }
    resultDiv.textContent = `Resultado: ${result}`;
});
