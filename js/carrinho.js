document.addEventListener('DOMContentLoaded', () => {
    let carrinho = [];

    const totalElement = document.querySelector('.total h3');
    const finalizarBtn = document.querySelector('.total button');
    
    // Função para adicionar itens no carrinho
    const adicionarProduto = (produto, preco) => {
        carrinho.push({ produto, preco });
        atualizarCarrinho();
    };

    // Função para remover itens do carrinho
    const removerProduto = (index) => {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    };

    // Função para atualizar o carrinho
    const atualizarCarrinho = () => {
        const carrinhoContainer = document.querySelector('.carrinho');
        carrinhoContainer.innerHTML = '';

        let total = 0;

        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <h3>${item.produto}</h3>
                <p>R$ ${item.preco.toFixed(2)}</p>
                <button onclick="removerProduto(${index})">Remover</button>
            `;
            carrinhoContainer.appendChild(itemDiv);

            total += item.preco;
        });

        totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
    };

    finalizarBtn.addEventListener('click', () => {
        if (carrinho.length > 0) {
            alert('Compra finalizada com sucesso!');
            carrinho = [];
            atualizarCarrinho();
        } else {
            alert('Seu carrinho está vazio!');
        }
    });
});
