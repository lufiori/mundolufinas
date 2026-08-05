async function carregarProdutos(categoria, destino){

    const resposta = await fetch("produtos.json");
    const produtos = await resposta.json();

    const produtosCategoria = produtos.filter(produto => produto.categoria === categoria);

if (destino === "catalogo") {

    document.getElementById("tituloCategoria").innerText = categoria;

    document.getElementById("quantidadeProdutos").innerText =
        produtosCategoria.length + " produtos encontrados";

}    

    const catalogo = document.getElementById(destino);

    catalogo.innerHTML = "";

    produtos
        produtosCategoria
        .slice(0, destino === "catalogo" ? 9999 : 8)
        .forEach(produto=>{

            catalogo.innerHTML += `
            
            <div class="blog-post-PROD">
                <div class="thumb">
                    <a href="${produto.link}" target="_blank">
                        <img src="${produto.imagem}">
                    </a>
                </div>
                <div class="down-content">
                    <h4>R$ ${produto.preco}</h4>
                    <p> </p>
                    <p> </p>

                    <div class="border-first-button">
                        <a href="${produto.link}" target="_blank">
                            🛒 Saiba mais...
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

if(document.getElementById("catalogo-beleza")){
    carregarProdutos("Beleza","catalogo-beleza");
    carregarProdutos("Casa e Organização","catalogo-casa");
    carregarProdutos("Cozinha","catalogo-cozinha");
    carregarProdutos("Fitness e Saúde","catalogo-fitness");
    carregarProdutos("Moda e Acessórios","catalogo-moda");
    carregarProdutos("Pets","catalogo-pets");
    carregarProdutos("Tecnologia","catalogo-tecnologia");
    carregarProdutos("Utilidades","catalogo-utilidades");
}

