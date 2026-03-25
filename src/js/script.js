document.addEventListener('DOMContentLoaded', () => {

  
  const playlist = [
    'src/audios/musica1.mp3',
    'src/audios/musica2.mp3',
    'src/audios/musica3.mp3',
    'src/audios/musica4.mp3',
    'src/audios/musica5.mp3'
  ];

  let musicaAtual = 0;

  const audio = document.getElementById('bg-music');
  const startScreen = document.getElementById('start-screen');
  let tocando = false;

  
  audio.src = playlist[musicaAtual];
  audio.volume = 0.3;

  
  audio.addEventListener('ended', () => {
    musicaAtual++;
    if (musicaAtual >= playlist.length) musicaAtual = 0;
    audio.src = playlist[musicaAtual];
    audio.play();
  });

  
  startScreen.addEventListener('click', () => {
    audio.play();
    tocando = true;

    startScreen.style.opacity = '0';
    startScreen.style.pointerEvents = 'none';

    setTimeout(() => {
      startScreen.style.display = 'none';
    }, 1000);
  });

  
  window.toggleAudio = () => {
    if (tocando) {
      audio.pause();
      tocando = false;
    } else {
      audio.play();
      tocando = true;
    }
  };

});



const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 6000);
