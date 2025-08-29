let nota1 = 10;
let nota2 = 5;
let nota3 = 10;

let media = (nota1 + nota2 + nota3)/3

if (media < 5) {
    console.log("Aluno Reprovado nota: " + media.toFixed(1));
}else if (media >= 5&& media <= 7) {
    console.log("Aluno de Recuperação nota: " + media.toFixed(1));
} else {
    console.log("Aluno Aprovado nota: " + media.toFixed(1));
}
