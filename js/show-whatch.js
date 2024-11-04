//função para atualizar a data e hora no cabeçalho da página
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleTimeString('pt-BR',
        { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
    );
}

setInterval(updateDateTime, 1000);
updateDateTime();
