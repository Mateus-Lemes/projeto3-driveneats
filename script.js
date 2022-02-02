let pratoSelecionado = 0;
let bebidaSelecionada = 0;
let sobremesaSelecionada = 0;
let Total = 0;

function selecionarPrato(selecionarPrato) {
    pratoSelecionado = document.querySelector(".pratos .selecionado");
    if (pratoSelecionado !== null) {
      pratoSelecionado.classList.remove("selecionado");
    }
    const selecionar = document.querySelector(selecionarPrato);
    selecionar.classList.add("selecionado");
    
    nomePrato = document.querySelector(selecionarPrato + "strong")
}
     

function selecionarBebida(selecionarBebida) {
    bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    if (bebidaSelecionada !== null) {
      bebidaSelecionada.classList.remove("selecionado");
    }
    const selecionar = document.querySelector(selecionarBebida);
    selecionar.classList.add("selecionado");
   
}

  
function selecionarSobremesa(selecionarSobremesa) {
    sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");
    if (sobremesaSelecionada !== null) {
      sobremesaSelecionada.classList.remove("selecionado");
    }
    const selecionar = document.querySelector(selecionarSobremesa);
    selecionar.classList.add("selecionado");
}

function removerBotao() {
    if (pratoSelecionado !== 0 && bebidaSelecionada !== 0 && sobremesaSelecionada !== 0) {
       const remover = document.querySelector(".button");
       remover.classList.remove("botao-desativado");
       remover.classList.add("botao-ativado");
       remover.innerHTML = "Fechar pedido";

       const desativarLink = document.querySelector(".footer .desativar-link");
       desativarLink.classList.remove("desativar-link");
    }
}

function enviarNoWpp() {
    const mensagem = "Olá, gostaria de fazer o pedido:"
    + `\n - Prato  ${pratoSelecionado}`
    + `\n - Bebida ${bebidaSelecionada}`
    + `\n - Sobremesa ${sobremesaSelecionada}`
    + `\n - Total: R$ ${Total}`

    const link = 'https://wa.me/5521990475861?text=' + encodeURIComponent(mensagem);
    window.open(link, '_blank');
}