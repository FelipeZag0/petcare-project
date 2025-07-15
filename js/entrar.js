// Função para validar o formato do email
function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

// Função para validar a senha
function validarSenha(senha) {
    const regexSenha = /^[0-9]{6,}$/;
    return regexSenha.test(senha);
}

// Adiciona o evento de submit ao formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtém os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');
    
    // Valida os campos de email e senha
    if (!validarEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um email válido.';
        return;
    }
    
    if (!validarSenha(senha)) {
        errorMessage.textContent = 'A senha deve conter apenas números e ter no mínimo 6 dígitos.';
        return;
    }

    errorMessage.textContent = '';
    alert('Login efetuado com sucesso!');
});

// Adiciona o evento de click ao botão de cadastro
document.getElementById('cadastroBtn').addEventListener('click', function() {
    window.location.href = 'cadastro.html';
});