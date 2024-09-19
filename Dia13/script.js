// Função para obter o horário local formatado
function atualizarHorario() {
    const agora = new Date();

    // Capturando o horário local formatado de acordo com a localização do usuário
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Exibe no formato 24 horas
        timeZoneName: 'short' // Mostra o fuso horário (opcional)
    };

    const horaLocal = new Intl.DateTimeFormat('pt-BR', options).format(agora);
    document.getElementById('time').textContent = horaLocal;
}

// Atualiza o horário a cada segundo
setInterval(atualizarHorario, 1000);

// Chamada inicial para exibir o horário imediatamente
atualizarHorario();
