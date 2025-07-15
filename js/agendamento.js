document.addEventListener('DOMContentLoaded', () => {
    // Recupera dados do serviço agendado
    const servicoData = JSON.parse(localStorage.getItem('servicoAgendado'));
    
    // Exibe os dados do serviço agendado
    if (servicoData) {
        document.getElementById('tipo-servico').textContent = 
            `Serviço de ${servicoData.tipo}: ${servicoData.servico}`;
    }

    // Adiciona o evento de click ao botão de finalizar agendamento
    document.getElementById('finalizar-agendamento').addEventListener('click', function(event) {
        event.preventDefault();
        alert("Serviço agendado com sucesso!");
        localStorage.removeItem('servicoAgendado'); // Limpa após agendamento
        window.location.href = './index.html';
    });
});