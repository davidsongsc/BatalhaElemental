function cor(tipo) {
    switch (tipo) {
        
        case "sobrenatural":
            return "linear-gradient(#00BD54, #8DCAFF, #F6FDF0, #5F5840)";
        case "magia":
            return "linear-gradient(#204df1, #2e8bdb, #2b96af, #fff)";
        case "elfico i":
            return "linear-gradient(#93f979, #98fb98, #9bec86)";
        case "vento":
            return "linear-gradient(#89ff69, #93f979, #98fb98, #9bec86, #5af632)";
        case "fogo":
            return "linear-gradient(#e60000,#cc0000, #b81414,#b22222, #a30000)";
        case "angelical":
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
fetch('http://192.168.0.50:5000/classesapi')
    .then(response => response.json())
    .then(data => {
        // Aqui temos acesso aos dados do arquivo JSON
        console.log(data);
        const cards = data.classeapi.map(card => {
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
            img.id = "imagem";
            img.className = card.nome;
            img.style.backgroundImage = cor(card.tipo);
            img.appendChild(divb);
            frenteDiv.appendChild(img);
            cardDiv.appendChild(frenteDiv)


            const tipo = document.createElement("h4");
            tipo.innerText = card.tipo;
            cardDiv.appendChild(tipo);

        
            const forte = document.createElement("h5");
            forte.innerText = card.forte;
            cardDiv.appendChild(forte);

      
            const fraco = document.createElement("h6");
            fraco.innerText = card.fraco;
            cardDiv.appendChild(fraco);

            
            const basedados = document.querySelector("#classes-grupos-cadeia");
            basedados.appendChild(cardDiv);
            backgr(card.imagem);
        });

    });
