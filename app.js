function pesquisar() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
}

function fecharPesquisa() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

function config(){
    var overlay = document.getElementById("configuracao_overlay");
    overlay.style.display = "flex";

}
function fecharConfig() {
    var overlay = document.getElementById("configuracao_overlay");
    overlay.style.display = "none";
}
function bloco1(){document.getElementById('meuH1').addEventListener('click', function() {
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/Fundo.jpg')";
  });}
  bloco1()
  function bloco2(){document.getElementById('meuH2').addEventListener('click', function() {
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/Fundo2.jpg')";
  });}
  bloco2()

  function bloco3(){document.getElementById('meuH3').addEventListener('click', function() {
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/Fundo4.jpg')";
  });}
  bloco3()
  function adicionarBotaoJogar(quadradoId, botaoId) {
    var quadrado = document.getElementById(quadradoId);
    var botaoJogar = document.getElementById(botaoId);
    
    quadrado.addEventListener('click', function() {
        document.querySelector('.botoes-jogar').style.display = 'block';
        botaoJogar.style.display = 'block';
    });


}
adicionarBotaoJogar('meuH1', 'botaoJogar1');


let botaoJogarAtivo = true;

document.getElementById('optionGames').addEventListener('click', function() {
    // Altera o fundo do elemento com a classe "screen" para a nova imagem
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/Fundo3.jpg')";
    
    // Altera o estado do botão "Jogar"
    botaoJogarAtivo = !botaoJogarAtivo;
    
    // Atualiza o botão com base no estado
    atualizarBotaoJogar();
});

function iniciarJogo() {
    // Lógica para iniciar o jogo quando o botão "Jogar" é clicado
}

function atualizarBotaoJogar() {
    const botaoJogar = document.getElementById('botaoJogar1');
    
    if (botaoJogarAtivo) {
        // Remove a classe para tornar o botão visível
        botaoJogar.classList.remove('botao-desativado');
        
        // Habilita o botão
        botaoJogar.disabled = false;
    } else {
        // Adiciona a classe para tornar o botão menos visível
        botaoJogar.classList.add('botao-desativado');
        
        // Desabilita o botão
        botaoJogar.disabled = true;
        document.getElementById('optionGames').addEventListener('click', function() {
            // Altera o fundo do elemento com a classe "screen" para a nova imagem
            document.querySelector('.screen').style.backgroundImage = "url('image/Telas/Fundo3.jpg')";
            
            // Altera o estado do botão "Jogar"
            botaoJogarAtivo = !botaoJogarAtivo;
        
            if (botaoJogarAtivo) {
                // Se o botão estiver ativo, habilita o botão
                adicionarBotaoJogar('meuH1', 'botaoJogar1');
            } else {
                // Se o botão estiver inativo, desabilita o botão
                document.querySelector('.botoes-jogar').style.display = 'none';
            }
        
            // Atualiza o botão com base no estado
            atualizarBotaoJogar();
        });
    }
}