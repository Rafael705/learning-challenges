class Aluno {
    constructor(nota1, nota2, nota3) {
        this.notas = [nota1, nota2, nota3];
    }
    calcularMedia() {
        const soma = this.notas.reduce((acc, curr) => acc + curr, 0);
        return soma / this.notas.length;
    }
    verificarSituacao() {
        const media = this.calcularMedia();
        if (this.notas.some(nota => nota < 0 || nota > 10)) {
            return "Notas inválidas! As notas devem estar entre 0 e 10.";
        }
        if (media >= 7) {
            return `Aprovado com média ${media.toFixed(2)}`;
        
        }else if (media >= 4) {
            return `Recuperação com média ${media.toFixed(2)}`;
        } else {
            return `Reprovado com média ${media.toFixed(2)}`;                                                           
        }
    }
}
document.getElementById("calcular").addEventListener("click", () => {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("calcular").innerText = "Por favor, preencha todas as notas!";
    return;
  }

  const aluno = new Aluno(n1, n2, n3);
  document.getElementById("calcular").innerText = aluno.verificarSituacao();
});