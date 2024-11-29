document.addEventListener('DOMContentLoaded', function () {
    const botoesAdicionarCarrinho = document.querySelectorAll('.adicionar-carrinho');
    const itensCarrinhoLista = document.getElementById('itens-carrinho');
    const totalElemento = document.getElementById('total');
    let carrinho = [];
    let total = 0;

    botoesAdicionarCarrinho.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });

    function adicionarAoCarrinho(event) {
        const produto = {
            id: event.target.dataset.id,
            nome: event.target.dataset.nome,
            preco: parseFloat(event.target.dataset.preco)
        };

        carrinho.push(produto);
        atualizarCarrinho();
    }

    function atualizarCarrinho() {
        itensCarrinhoLista.innerHTML = '';
        total = 0;

        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            itensCarrinhoLista.appendChild(li);
            total += item.preco;
        });

        totalElemento.textContent = total.toFixed(2);
    }
});
