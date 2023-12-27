// function botao(){
//     alert('clicou')
//     document.querySelector('h1').style.cursor = '';
// }
function atualizarRelogio() {
    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    var horaAtual = hora + ':' + minutos;

    document.getElementById('relogio').innerHTML = horaAtual+ " PM";

    setTimeout(atualizarRelogio, 1000 * 60); // Atualizar a cada minuto
}
atualizarRelogio();

function mostrarImagem(caminhoImagem) {
    var telaImagem = document.getElementById('telaImagem');
    var imagemAmpliada = document.getElementById('imagemAmpliada');
    
    imagemAmpliada.src = caminhoImagem;
    telaImagem.style.display = 'flex';
}

function ocultarImagem() {
    var telaImagem = document.getElementById('telaImagem');
    telaImagem.style.display = 'none';
}

function acaoJogar() {
    // Adicione a lógica de jogo ou ação desejada aqui
    
}