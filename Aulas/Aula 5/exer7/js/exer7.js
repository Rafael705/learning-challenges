 const calcularBtn = document.getElementById('calcularBtn');
const resultado = document.getElementById('resultado');

function fatorial() {
    let num = parseInt(document.getElementById('numero').value);
            
    if (isNaN(num) || num < 0) {
        resultado.value = 'Número inválido!';
        return;
     }

    let fat = 1;
    for (let i = num; i > 1; i--) {
        fat *= i;
    }

    resultado.value = fat; 
}

document.getElementById('calcularBtn').addEventListener('click', fatorial);
