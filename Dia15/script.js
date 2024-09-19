const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

// Função para atualizar o contador de caracteres
function updateCharCount() {
    const text = textInput.value;
    const count = text.length;
    charCount.textContent = `Total de caracteres: ${count}`;
}

// Adiciona o evento de input para atualizar o contador em tempo real
textInput.addEventListener('input', updateCharCount);
