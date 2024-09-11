document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const cliente = document.getElementById('cliente').value;
        const pet = document.getElementById('pet').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const servico = document.getElementById('servico').value;
        
        // Validações adicionais podem ser feitas aqui
        
        alert(`Agendamento confirmado para o cliente ${cliente} com o pet ${pet} para o serviço ${servico} em ${data} às ${hora}.`);
        
        // Redirecionar ou realizar outra ação
        window.location.href = 'confirmacao.html';
    });
});
