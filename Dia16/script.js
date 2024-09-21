let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

setInterval(() => {
    moveSlide(1); // Muda para a próxima imagem automaticamente a cada 3 segundos
}, 3000);
