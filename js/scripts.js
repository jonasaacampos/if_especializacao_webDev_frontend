//função para atualizar a data e hora no cabeçalho da página
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
