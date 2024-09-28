// Função para gerar posições aleatórias para as imagens
function randomPosition(image) {
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    image.style.left = randomX + 'px';
    image.style.top = randomY + 'px';
}

// Aplicando a função às imagens periodicamente
const img1 = document.getElementById('img1');

setInterval(() => {
    randomPosition(img1);
}, 3000); // Movimentação a cada 3 segundos