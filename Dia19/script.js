document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value;
    const apiKey = 'SUA_CHAVE_DA_API_AQUI'; // Insira sua chave da API aqui
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Descrição: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Umidade: ${data.main.humidity}%`;
            } else {
                alert('Cidade não encontrada. Tente novamente.');
            }
        })
        .catch(error => {
            alert('Erro ao buscar os dados. Verifique sua conexão.');
            console.error(error);
        });
});
