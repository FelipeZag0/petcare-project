document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        if (email === 'usuario@petshop.com' && senha === '123456') {
            alert('Login realizado com sucesso!');
            // Redirecionar para página inicial ou dashboard
            window.location.href = 'index.html';
        } else {
            alert('E-mail ou senha incorretos!');
        }
    });
});
