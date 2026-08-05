async function carregarProdutos(categoria, destino){

    const resposta = await fetch("produtos.json");
    const produtos = await resposta.json();

    const catalogo = document.getElementById(destino);

    catalogo.innerHTML = "";

    produtos
        .filter(produto => produto.categoria === categoria)
        .forEach(produto=>{

            catalogo.innerHTML += `
            
            <div class="blog-post">
                <div class="thumb">
                    <a href="${produto.link}" target="_blank">
                        <img src="${produto.imagem}">
                    </a>
                </div>
                <div class="down-content">
                    <span class="category">
                        R$ ${produto.preco}
                    </span>
                    <h4></h4>
                    <p>${produto.descricao}</p>

                    <div class="border-first-button">
                        <a href="${produto.link}" target="_blank">
                            🛒 Ver (${produto.loja})
                        </a>
                        <span class="author">
                            <p> </p>
                        </span>
                    </div>
                </div>
            </div>

            `;

        });

}

carregarProdutos("Beleza","catalogo-beleza");
carregarProdutos("Casa e Organização","catalogo-casa");
carregarProdutos("Cozinha","catalogo-cozinha");
carregarProdutos("Fitness e Saúde","catalogo-fitness");
carregarProdutos("Moda e Acessórios","catalogo-moda");
carregarProdutos("Pets","catalogo-pets");
carregarProdutos("Tecnologia","catalogo-tecnologia");
carregarProdutos("Utilidades","catalogo-utilidades");
