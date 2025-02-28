document.addEventListener('DOMContentLoaded', () => {
    const produtosContainer = document.getElementById('produtos');

    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            data.products.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');

                produtoDiv.innerHTML = `
                    <img src="${produto.thumbnail}" alt="${produto.title}">
                    <h2>${produto.title}</h2>
                    <p>${produto.description}</p>
                    <p><strong>Preço:</strong> $${produto.price}</p>
                `;

                produtosContainer.appendChild(produtoDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});