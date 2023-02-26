function cor(tipo) {
    switch (tipo) {
        case "livro da destruição":
            return "linear-gradient(#4b0082, #000000, #750f00, #d02020)";
        case "livro da criação":
            return "linear-gradient(#d02020, #750f00, #000000, #4b0082)";
        case "metal":
            return "linear-gradient(#959595, #b2bfc3, #698086, #5f9ea0)";
        case "divino i":
            return "linear-gradient(#00BD54, #8DCAFF, #F6FDF0, #77625d)";
        case "magia":
            return "linear-gradient(#204df1, #2e8bdb, #2b96af, #fff)";
        case "invocação":
            return "linear-gradient(black, black, white, black, black)";
        case "magianegra":
            return "linear-gradient(orange, white, black, white, white)";
        case "magianegra":
            return "linear-gradient(orange, white, black, white, white)";
        case "raio":
            return "linear-gradient(#0021cc, #0000ff, #0013ff, #0029ff, #193ae6)";
        case "vento":
            return "linear-gradient(#89ff69, #93f979, #98fb98, #9bec86, #5af632)";
        case "fogo":
            return "linear-gradient(#e60000,#cc0000, #b81414,#b22222, #a30000)";
        case "agua":
            return "linear-gradient(#89e2ec, #7cecf9, #6cf8ff, #35e2f6, #00ffff)";

    };
}
function backgr(imagem) {
    let linkurl = "http://192.168.0.50:5000/img/" + imagem + ".png";
    var minhaDiv = document.getElementById(imagem);
    var parteum = "url('";
    var partedo = "')";
    var partetr = parteum + linkurl + partedo;
    minhaDiv.style.backgroundImage = partetr;

    return linkurl;

}

function barravida(valor) {
    let x = 17;
    return x * valor + 180;
}
fetch('http://192.168.0.50:5000/elementos')
    .then(response => response.json())
    .then(data => {
        // Aqui temos acesso aos dados do arquivo JSON
        console.log(data);
        const cards = data.elementos.map(card => {
            // Criar seção da carta
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("carta");
            cardDiv.id = "elemento-carta";
            cardDiv.style.backgroundImage = cor(card.tipo);

            const frenteDiv = document.createElement("ul");
            frenteDiv.classList.add("frente");

            const nome = document.createElement("h3");
            nome.innerText = card.nome;
            frenteDiv.appendChild(nome);

            const descricao = document.createElement("p");
            descricao.innerHTML = card.descricao;
            frenteDiv.appendChild(descricao);


            const divb = document.createElement("div");

            divb.className = "imagemls";
            divb.id = card.imagem;

            const img = document.createElement("div");
            //img.src = "http://192.168.0.50:5000/img/" + card.imagem;
            img.id = "imagem";
            img.className = card.nome;
            img.style.backgroundImage = cor(card.tipo);
            img.appendChild(divb);
            frenteDiv.appendChild(img);
            const diva = document.createElement("div");


            diva.appendChild(frenteDiv);

            cardDiv.appendChild(diva);
            const habilidades = document.createElement("div");
            const tipo = document.createElement("h4");
            tipo.innerText = card.tipo;
            habilidades.appendChild(tipo);

            const pagina = document.createElement("h5");
            pagina.innerText = card.pagina;
            habilidades.appendChild(pagina);

            
         



            frenteDiv.appendChild(habilidades);
            const basedados = document.querySelector("#elementos-grupos-cadeia");
            basedados.appendChild(cardDiv);
            backgr(card.imagem);
        });

    });
