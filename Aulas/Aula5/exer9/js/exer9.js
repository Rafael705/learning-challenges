 const botao = document.getElementById("btnCalcular");

    botao.addEventListener("click", function() {
      let preco = Number(document.getElementById("preco").value);
      let codigo = Number(document.getElementById("codigo").value);
      let valorFinal;

      if (isNaN(preco) || preco <= 0) {
        alert("Digite um preço válido!");
        return;
      }

      switch (codigo) {
        case 1:
          valorFinal = preco - (preco * 0.10);
          break;
        case 2:
          valorFinal = preco - (preco * 0.05);
          break;
        case 3:
          valorFinal = preco + (preco * 0.10);
          break;
        default:
          alert("Código inválido! Use 1, 2 ou 3.");
          return;
      }

      document.getElementById("valorReal").value = "R$ " + preco.toFixed(2);
      document.getElementById("valorFinal").value = "R$ " + valorFinal.toFixed(2);
    });