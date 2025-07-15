document.addEventListener('DOMContentLoaded', function() {
    // Função para validar o formato do email
    const cadastroForm = document.getElementById('form-cadastro');
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const nomePet = document.getElementById('nome-pet').value;
        const tipo = document.getElementById('tipo').value;
        const raca = document.getElementById('raca').value;
        const temperamento = document.getElementById('temperamento').value;

        if (nome && endereco && telefone && email && nomePet && tipo && raca && temperamento) {
            alert('Cadastro realizado com sucesso!');
            cadastroForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});