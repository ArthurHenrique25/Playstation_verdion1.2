
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

const musicaGames = new Audio('music/sons/arquivo.mp3');
musicaGames.loop = true;

const musicaGodOfWar = new Audio("music/sons/GodOfWar.mp3");
musicaGodOfWar.loop = true;

const musicaeldenRing = new Audio("music/sons/musicbutton2.mp3");
musicaeldenRing.loop = true;

const musicagta = new Audio("music/sons/gta.mp3");
musicagta.loop = true;

const musicaneve = new Audio("music/sons/neve.mp3");
musicaneve.loop = true;



function bloco1(){document.getElementById('meuH1').addEventListener('click', function() {
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/Fundo.jpg')";
    musicaGodOfWar.play();
    musicaGames.pause();
    musicaeldenRing.pause();
    musicagta.pause();
  });}
  bloco1()
  function bloco2(){document.getElementById('meuH2').addEventListener('click', function() {
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/Fundo2.jpg')";
    musicaeldenRing.play();
    musicaGodOfWar.pause();
    musicaGames.pause();
    musicagta.pause();
  });}
  bloco2()

  function bloco3(){document.getElementById('meuH3').addEventListener('click', function() {
    document.querySelector('.screen').style.backgroundImage = "url('image/Telas/FundoGta.jpg')";
    musicagta.play();
    musicaGodOfWar.pause();
    musicaGames.pause();
    musicaeldenRing.pause();
  });}
  
  bloco3()
 




    var elementosBotao1 = ['botaoJogar', 'botaoJoga2', 'Godofwar'];
    var elementosBotao2 = ['botaoJogar3', 'botaoJoga2_1', 'EldenRing'];
    var elementosBotao3 = ['botaoJogar4','botaoJoga2_2','Gta']
    var elementoAtual = null;

function reiniciarAnimacao(elemento) {
    elemento.classList.remove('animacao');
    // Adiciona um pequeno atraso antes de adicionar a classe novamente
    setTimeout(function() {
        elemento.classList.add('animacao');
    }, 10);
    
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
    document.getElementById('botaoJoga2_2').style.display = 'none';
    
    document.getElementById('botaoJoga2_2').style.display = 'none';
    document.getElementById('botaoJoga2_1').style.display = 'none';
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

function adicionarBotaoJogar(quadradoId, botaoIds) {
    var quadrado = document.getElementById(quadradoId);
    
    botaoIds.forEach(function(botaoId) {
        var botao = document.getElementById(botaoId);

        botao.addEventListener('click', function() {
            document.querySelector('.botoes-jogar').style.display = 'block';
            
            // Certifique-se de que ambos os botões são exibidos
            botaoIds.forEach(function(id) {
                document.getElementById(id).style.display = 'block';
            });

            // Reinicia a animação para o botão clicado
            reiniciarAnimacao(botao);
        });

        quadrado.addEventListener('click', function() {
            // Registra o último botão clicado no quadrado
            quadrado.ultimoBotaoClicado = botao;
        });
    });
}
adicionarBotaoJogar('meuH1', ['botaoJogar', 'botaoJoga2', 'Godofwar']);
adicionarBotaoJogar('meuH2', ['botaoJogar3', 'botaoJoga2_1', 'EldenRing']);
adicionarBotaoJogar('meuH3', ['botaoJogar4', 'botaoJoga2_2', 'Gta']);


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
    var elementos = document.querySelectorAll(".quadrado", "#botaoJogar", "#botaoJoga2_2","#botaoJoga2_1","#botaoJoga2","#Godofwar","#botaoJogar3","#EldenRing","#botaoJogar4","#Gta");

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
    musicaGames.pause();
    musicaGodOfWar.pause();
    musicaeldenRing.pause();
    musicagta.pause();
    
});

// Adiciona o evento de clique ao botão Games
document.getElementById('optionGames').addEventListener('click', function () {
    habilitarElementos();
    musicaGames.play();
    musicaGodOfWar.pause();
    musicaeldenRing.pause();
    musicagta.pause();
    
});

 // Ouvinte de evento para alterações no controle de volume

 function exibirTelaPreta() {
    var telaPreta = document.getElementById("telaGodofWar");
    telaPreta.style.display = "flex";
    musicaGodOfWar.pause();
    musicaneve.play();
    var videoGodofWar = document.getElementById("videoGodofWar");
    videoGodofWar.addEventListener("loadeddata", function () {
        videoGodofWar.play();
    });
}
var videoGodofWar = document.getElementById("videoGodofWar");

videoGodofWar.addEventListener("loadeddata", function () {
    console.log("Vídeo carregado com sucesso.");
    videoGodofWar.play();
});

videoGodofWar.addEventListener("error", function (e) {
    console.error("Erro ao carregar o vídeo:", e);
});

videoGodofWar.addEventListener("ended", function () {
    console.log("Vídeo concluído.");
});

document.getElementById("fecharBotao").addEventListener("click", fecharTelaPreta);

// Função para fechar a tela preta
function fecharTelaPreta() {
    musicaneve.pause();
    var telaPreta = document.getElementById("telaGodofWar");
    telaPreta.style.display = "none";
    musicaGodOfWar.play();  // Retoma a música após fechar a tela preta
}