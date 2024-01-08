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
 
  function mostrarBotao() {
    document.getElementById('botaoJogar').style.display = 'block';
    document.getElementById('botaoJoga2').style.display = 'block';
}

// Função para desabilitar o botão
function desabilitarBotao() {
    document.getElementById('botaoJogar').style.display = 'none';
    document.getElementById('botaoJoga2').style.display = 'none';
}

// Adiciona o evento de clique a cada quadrado
document.getElementById('meuH1').addEventListener('click', function () {
    mostrarBotao();
});
document.getElementById('meuH2').addEventListener('click', function () {
    mostrarBotao();
});
document.getElementById('meuH3').addEventListener('click', function () {
    mostrarBotao();
});

// Adiciona o evento de clique ao h1 para desabilitar o botão
document.getElementById('optionGames').addEventListener('click', desabilitarBotao);

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



function perfil(){
    var overlay = document.getElementById("perfil");
    overlay.style.display = "flex";
}

function fecharperfil() {
    var overlay = document.getElementById("perfil");
    overlay.style.display = "none";
}

function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();

    // Adiciona um zero à esquerda se a hora ou o minuto for menor que 10
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    // Atualiza o elemento da tabela com a hora e o minuto formatados
    document.getElementById("clock").innerText = hour + " : " + minute;
}

// Atualiza o relógio a cada segundo (pode ser ajustado conforme necessário)
setInterval(updateClock, 1000);

// Chama a função uma vez para exibir a hora inicial imediatamente
updateClock();



