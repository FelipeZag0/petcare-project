# PetShop Online

## Sobre o Projeto
Sistema completo para petshop com autenticação de usuários, agendamento de serviços, e-commerce de produtos e cadastro de pets. Gerencia carrinho de compras via localStorage com interface responsiva.

## Conceitos e Arquitetura
- **Módulos:**
  - `entrar.js`: Autenticação com validação de email/senha
  - `cadastro.js`: Formulário de cadastro de clientes e pets
  - `produtos.js`: Catálogo com carrossel e adição ao carrinho
  - `carrinho.js`: Gerenciamento de itens e checkout
  - `agendamento.js`: Confirmação de serviços agendados
- **Fluxo de Dados:**
  ```mermaid
  graph LR
    A[Login] --> B[Produtos]
    B --> C[Carrinho]
    C --> D[Checkout]
    B --> E[Agendamento]

## Instalação & Execução
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/petshop-online.git
```

2. Instale um servidor local:
```bash
npm install -g http-server
```

3. Inicie o projeto:
```bash
http-server ./ -p 8080
```

4. Acesse no navegador:
```
http://localhost:8080/index.html
```

## Boas Práticas
- **Segurança:**
  - Validação frontend reforçada
  - Dados sensíveis isolados no localStorage
- **Código:**
  - Funções modulares
  - Tratamento de erros em callbacks
  - Semântica HTML5
- **Testes:**
  ```bash
  # Instale o Cypress
  npm install cypress --save-dev
  # Execute os testes
  npx cypress open
  ```

## Licença
MIT License - Consulte [LICENSE.md](LICENSE.md)
```

---

### Resumo para "About" do Repositório

> Sistema web completo para petshops com autenticação, e-commerce e agendamento de serviços. Gerencia carrinho em tempo real via localStorage e oferece interface responsiva. Desenvolvido com JavaScript vanilla seguindo boas práticas de segurança.
