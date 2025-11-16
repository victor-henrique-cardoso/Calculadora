const display = document.getElementById("display");
const botoes = document.querySelectorAll("button");// isso aqui seleciona todos os botoes

botoes.forEach(btn => { // toda vez que clicar em um botao exexuta a funcao
  btn.addEventListener("click", () => {
    let valor = btn.textContent; //pega o valor do botao clicado

    if (valor === "C") {// se for C limpa o display
      display.textContent = "";
    } else if (valor === "=") {// se for igual faz o calculo
      try {// tenta fazer o calculo
        let expressao = display.textContent//pega o conteudo do display
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-")
          .replace(",", ".")
          .replace("π", Math.PI);
        display.textContent = eval(expressao);// faz o calculo
      } catch {// se der erro mostra erro no display
        display.textContent = "Erro";
      }
    } else {// se for outro valor adiciona ao display
      display.textContent += valor;
    }
  });
});
