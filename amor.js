// Criar animação de Minions subindo/descendo
const background = document.querySelector('.background-minions');

// Substitua por imagens de minions (PNG com fundo transparente)
const minionImgs = [
  "minion1.png",
  "minion2.png",
  "minion3.png"
];

function createMinion() {
  const minion = document.createElement('img');
  minion.src = minionImgs[Math.floor(Math.random() * minionImgs.length)];
  minion.classList.add('minion');

  // posição horizontal aleatória
  minion.style.left = Math.random() * 100 + "vw";

  // duração e atraso
  const duration = Math.random() * 5 + 8;
  minion.style.animationDuration = duration + "s";

  background.appendChild(minion);

  // remover depois da animação
  setTimeout(() => {
    minion.remove();
  }, duration * 1000);
}

// Criar minions constantemente
setInterval(createMinion, 1200);
