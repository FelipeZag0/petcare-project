document.querySelectorAll('.carrossel').forEach(carrossel => {
    const imagens = carrossel.querySelectorAll('.carrossel-imagens img');
    let currentImageIndex = 0;

    const prevButton = carrossel.querySelector('.carrossel-prev');
    const nextButton = carrossel.querySelector('.carrossel-next');

    // Função para atualizar o carrossel
    function updateCarrossel() {
        imagens.forEach((img, index) => {
            img.style.display = index === currentImageIndex ? 'block' : 'none';
        });
    }

    // Evento do botão "Anterior"
    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imagens.length - 1;
        updateCarrossel();
    });

    // Evento do botão "Próximo"
    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < imagens.length - 1) ? currentImageIndex + 1 : 0;
        updateCarrossel();
    });

    // Inicia o carrossel
    updateCarrossel();

    // Navegação automática
    setInterval(function () {
        nextButton.click();  // Faz a imagem avançar automaticamente
    }, 5000);  // Troca de imagem a cada 5 segundos
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões "Adicionar ao Carrinho"
    document.querySelectorAll('button[data-id]').forEach(button => {
        button.addEventListener('click', () => {
            // Recupera o produto e o preço dos atributos data
            const produtoId = button.getAttribute('data-id');
            const preco = button.getAttribute('data-preco');
            const produtoNome = button.parentElement.querySelector('h3').innerText;

            // Recupera o carrinho do localStorage ou inicializa um carrinho vazio
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            // Adiciona o produto ao carrinho
            carrinho.push({ produtoId, produtoNome, preco });

            // Atualiza o carrinho no localStorage
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            // Exibe uma mensagem de confirmação
            alert(`${produtoNome} adicionado ao carrinho!`);
        });
    });
});

// Adiciona o evento de click ao botão de agendar banho
document.getElementById('agendar-banho').addEventListener('click', function() {
    const servicoBanho = document.getElementById('servico-banho').value;
    if (servicoBanho) {
        localStorage.setItem('servicoAgendado', JSON.stringify({
            tipo: 'banho',
            servico: servicoBanho
        }));
        window.location.href = 'agendamento.html';
    } else {
        alert('Por favor, selecione o tipo de serviço para o banho.');
    }
});

// Adiciona o evento de click ao botão de agendar tosa
document.getElementById('agendar-tosa').addEventListener('click', function() {
    const servicoTosa = document.getElementById('servico-tosa').value;
    if (servicoTosa) {
        localStorage.setItem('servicoAgendado', JSON.stringify({
            tipo: 'tosa',
            servico: servicoTosa
        }));
        window.location.href = 'agendamento.html';
    } else {
        alert('Por favor, selecione o tipo de serviço para a tosa.');
    }
});