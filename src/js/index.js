/* 

Objetivo 1 - quando o usuário  clicar no botão de seleção de plataformas deve abrir uma caixa com os botoes de seleção de plataforma

    passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima deles
    
    passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    passo 3 - pegar o clique do usuário no JS

    passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataforma dentro do botao para que o conteudo apareça

Objetivo 2 - caso a lista de botões de plataforma ja esteja aparecerendo e o usuário clicaar em cima do botao, o conteudo deve ser escondido

    passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo para que ele escondao conteudo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {  
    //const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    elementoPlataformas.classList.toggle("ativo");
    
    //     if(botaoEstaAberto) {
    //         elementoPlataformas.classList.remove("ativo");
    // }   else{
    //     elementoPlataformas.classList.add("ativo");
    // }
})