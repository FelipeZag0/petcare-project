document.addEventListener('DOMContentLoaded', () => {
    // Função para atualizar o carrinho
    const atualizarCarrinho = () => {
        const carrinhoContainer = document.querySelector('.carrinho');
        const totalElement = document.querySelector('.total h3');
        let total = 0;
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        carrinhoContainer.innerHTML = '';

        carrinho.forEach((item, index) => {
            total += parseFloat(item.preco);
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <p>${item.produtoNome} - R$ ${item.preco}</p>
                <button class="remover" data-index="${index}">Remover</button>
            `;
            carrinhoContainer.appendChild(itemElement);
        });

        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

        document.querySelectorAll('.remover').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                removerProduto(index);
            });
        });
    };

    // Função para remover um produto do carrinho
    const removerProduto = (index) => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.splice(parseInt(index), 1); // Conversão para número
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
    };

    atualizarCarrinho();

    // Adiciona o evento de click ao botão de finalizar compra
    const finalizarBtn = document.querySelector('#finalizar-compra');
    finalizarBtn.addEventListener('click', () => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        if (carrinho.length > 0) {
            window.location.href = 'confirmacao.html';
        } else {
            alert('Seu carrinho está vazio!');
        }
    });

    // Adiciona o evento de click ao botão de continuar comprando
    const continuarBtm = document.querySelector('#continuar-compra');
    continuarBtm.addEventListener('click', () => {
        window.location.href = 'produtos.html';
    });
});