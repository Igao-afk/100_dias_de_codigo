const card = document.querySelector('.card');

// Adiciona o evento de clique para virar o card
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});
