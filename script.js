const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById ('proximo');
const botaoAnterior = document.getElementById ('anterior');
const nomeMusica = document.getElementById ('musica');
const audioMusica = document.getElementById('audio-musica');

const numeroMusica = 6;
let taTocando =  0;
let musicaAtual = 1;

function  tocarFaixa() {
    audioMusica.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
}
function pausarFaixa(){
    audioMusica.pause();
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
}

function tocarOuPausar() {
    if ( taTocando === 0) {
        tocarFaixa ();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
        
    }
}

function trocarNomeFaixa() {
    nomeMusica.innerText = 'Trap ' + musicaAtual;
}

function proximaFaixa() {
    if (musicaAtual === numeroMusica) {
        musicaAtual = 1;
    } else {
        musicaAtual = musicaAtual + 1
    }

   audioMusica.src = "Projeto-Musical/Musicas/Musicas/" + musicaAtual + '.mp3';
   tocarFaixa ();
   taTocando = 1;
   trocarNomeFaixa();
}

function voltarFaixa() {
    if (musicaAtual === 1) {
        musicaAtual = numeroMusica;
    } else {
        musicaAtual = musicaAtual - 1
    }

   audioMusica.src = "Projeto-Musical/Musicas/Musicas/" + musicaAtual + '.mp3';
   tocarFaixa ();
   taTocando = 1;
   trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa)
botaoAnterior.addEventListener('click', voltarFaixa)

