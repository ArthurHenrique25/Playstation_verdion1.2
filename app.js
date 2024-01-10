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
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/FundoGta.jpg')";
    
  });}
  
  bloco3()
 




  var elementosBotao1 = ['botaoJogar', 'botaoJoga2', 'Godofwar'];
var elementosBotao2 = ['botaoJogar3', 'botaoJoga2', 'EldenRing'];
var elementosBotao3 = ['botaoJogar4','botaoJoga2','Gta']
var elementoAtual = null;

function reiniciarAnimacao(elemento) {
    elemento.classList.remove('animacao');
    void elemento.offsetWidth; // Trigger reflow
    elemento.classList.add('animacao');
}

function exibirElementosComAnimacao(elementos) {
    if (elementoAtual) {
        elementoAtual.forEach(function (elemento) {
            document.getElementById(elemento).style.display = 'none';
        });
    }

    elementos.forEach(function (elemento) {
        var el = document.getElementById(elemento);
        el.style.display = 'block';
        reiniciarAnimacao(el);
    });

    elementoAtual = elementos;
}

function botaojogo1() {
    exibirElementosComAnimacao(elementosBotao1);
}

function botaojogo2() {
    exibirElementosComAnimacao(elementosBotao2);
}

function botaojogo3() {
    exibirElementosComAnimacao(elementosBotao3);
}



// Função para desabilitar o botão
function desabilitarBotao() {
    document.getElementById('botaoJogar').style.display = 'none';
    document.getElementById('botaoJoga2').style.display = 'none';
    document.getElementById('Godofwar').style.display = 'none';
    document.getElementById('botaoJogar3').style.display = 'none';
    document.getElementById('EldenRing').style.display = 'none';
    document.getElementById('botaoJogar4').style.display = 'none';
    document.getElementById('Gta').style.display = 'none';
}

// Adiciona o evento de clique a cada quadrado
document.getElementById('meuH1').addEventListener('click', function () {
    
    botaojogo1();
});
document.getElementById('meuH2').addEventListener('click', function () {
    botaojogo2();
});
document.getElementById('meuH3').addEventListener('click', function () {
    botaojogo3();
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
adicionarBotaoJogar('meuH1','meuH2','meuH3', 'botaoJogar1','botaoJoga2');


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



function optionmedia(){
        document.getElementById('optionMedia').addEventListener('click',function() {
            document.querySelector('.screen').style.backgroundImage = "url('image/Media/assistir.png')";
            document.getElementById('optionMedia').addEventListener('click', desabilitarBotao);


});}
optionmedia()

function desabilitarElementos() {
    var elementos = document.querySelectorAll('.quadrado, #botaoJogar, #botaoJoga2',"#Godofwar","#botaoJogar3","#EldenRing","#botaoJogar4","#Gta");

    elementos.forEach(function(elemento) {
        elemento.style.display = 'none';
    });
}

// Função para habilitar os elementos
function habilitarElementos() {
    var elementos = document.querySelectorAll('.quadrado');
    elementos.forEach(function(elemento) {
        elemento.style.display = 'block';
    });
}

// Adiciona o evento de clique ao botão Media
document.getElementById('optionMedia').addEventListener('click', function () {
    document.querySelector('.screen').style.backgroundImage = "url('image/Media/assistir.png')";
    desabilitarElementos();
});

// Adiciona o evento de clique ao botão Games
document.getElementById('optionGames').addEventListener('click', function () {
    habilitarElementos();
});