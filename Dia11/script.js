const movable = document.getElementById('movable');
let isDragging = false;
let offsetX, offsetY;

// Evento de mousedown para iniciar o arraste
movable.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - movable.offsetLeft;
    offsetY = e.clientY - movable.offsetTop;
    movable.style.cursor = 'grabbing';
});

// Evento de mousemove para mover o elemento
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        movable.style.left = `${e.clientX - offsetX}px`;
        movable.style.top = `${e.clientY - offsetY}px`;
    }
});

// Evento de mouseup para parar o arraste
document.addEventListener('mouseup', () => {
    isDragging = false;
    movable.style.cursor = 'grab';
});
