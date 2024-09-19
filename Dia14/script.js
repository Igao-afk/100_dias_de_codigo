const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Função para alternar entre os temas
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    // Atualiza o texto do botão conforme o tema atual
    if (body.classList.contains('dark')) {
        toggleButton.textContent = 'Alternar para Tema Claro';
    } else {
        toggleButton.textContent = 'Alternar para Tema Escuro';
    }
});
