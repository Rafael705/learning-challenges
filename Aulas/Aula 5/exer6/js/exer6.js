let num = Math.round(Math.random() * 100);

console.log(num);

function adivinhar() {
    let chute = parseInt(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');
    if (isNaN(chute)) {
        resultado.innerText = 'Por favor, insira um número válido.';
    } else if (chute < 0 || chute > 100) {
        resultado.innerText = 'O número deve estar entre 0 e 100.';
    } else if (chute < num) {
        resultado.innerText = 'Tente um número maior.';
    } else if (chute > num) {
        resultado.innerText = 'Tente um número menor.';
    }   else {
        resultado.innerText = 'Parabéns! Você acertou!';
        num = Math.round(Math.random() * 100);
        console.log(num);
    }
}

document.getElementById('gerar').addEventListener('click', adivinhar);
