

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const cheerio = require('cheerio');
const app = express();
const elementosf = require('./elementos.json');
var personagens = [];

const logSistema = () => {
  elementosf.elementos.map((item, index) => {
    fetch(`https://dicio-api-ten.vercel.app/v2/${item.descricao}`)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].meanings)
        personagens.push({
          id: item.id,
          serial: item.serial,
          nome: item.nome,
          tipo: item.tipo,
          efeito: item.efeito,
          descricao: data[0].meanings,
          imagem: item.imagem,
          poder: item.poder,
          defesa: item.defesa,
          imagefeito: item.imagefeito,
          posicao: item.posicao,
          nivel: item.nivel,
          combina: item.combina,
          chave: index
        })
      })
      .catch(error => {
        console.error(error)
        console.log('error 021')
        personagens.push({
          id: item.id,
          serial: item.serial,
          nome: item.nome,
          tipo: item.tipo,
          efeito: item.efeito,
          descricao: item.descricao,
          imagem: item.imagem,
          poder: item.poder,
          defesa: item.defesa,
          imagefeito: item.imagefeito,
          posicao: item.posicao,
          nivel: item.nivel,
          combina: item.combina,
          chave: index
        })
     
      });
      

  })


}
logSistema()
// middlewares  
app.use(bodyParser.json());
app.use(cors());

// rotas
app.get('/', (req, res) => {
  res.send('API funcionando!');
});


// pesquisa
app.get('/pesquisa/:palavra', (req, res) => {
  let resultado;
  let parametro = req.params.palavra
  const endpoint = `https://dicio-api-ten.vercel.app/v2/${parametro}`;
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const guerreiro = data[0].meanings;
      console.log(guerreiro); // Exibe "Guerreiro" no console
      resultado = guerreiro;
      res.json(resultado);
    })
    .catch(error => console.error(error));

});



// Rota para json com filtro por tipo de elemento
app.get('/elemento/:tipo', (req, res) => {
  const tipo = req.params.tipo;


  if (tipo === 'todas') {
    res.json(personagens);
  } else {
    const elementosFiltrados = personagens.filter(elemento => elemento.tipo === tipo);
    console.log(elementosFiltrados);
    console.log(personagens)
    res.json(elementosFiltrados);
  }

});


// Rota para json
app.get('/player/:pesquisa', (req, res) => {

  const player = [{
    jogador: 'davidson', nivel: 5,
    inventario: {
      posicao_a1: ["K1", 1],    // area de ataque um, mais forte
      posicao_a2: ["K48", 2],     // area de ataque dois, longa distancia
      posicao_a3: ["vazio", 3],    // area de ataque tres, encantamentos
      posicao_a4: ["vazio", 4],    // area de ataque quatro, ataque combinado

      posicao_d1: ["vazio", 5],
      posicao_d2: ["vazio", 6],
      posicao_d3: ["vazio", 7],
      posicao_d4: ["vazio", 8],

      posicao_c1: ["K21", 9],
      posicao_c2: ["vazio", 10],
      posicao_c3: ["vazio", 11],
      posicao_c4: ["vazio", 12],

      posicao_f1: ["vazio", 13],
      posicao_f2: ["vazio", 14],
      posicao_f3: ["vazio", 15],
      posicao_f4: ["vazio", 16],
    }
    ,
    inventario2: {
      posicao_a1: ["vazio", 1],    // area de ataque um, mais forte
      posicao_a2: ["vazio", 2],     // area de ataque dois, longa distancia
      posicao_a3: ["vazio", 3],    // area de ataque tres, encantamentos
      posicao_a4: ["vazio", 4],    // area de ataque quatro, ataque combinado

      posicao_d1: ["vazio", 5],
      posicao_d2: ["vazio", 6],
      posicao_d3: ["vazio", 7],
      posicao_d4: ["vazio", 8],

      posicao_c1: ["vazio", 9],
      posicao_c2: ["vazio", 10],
      posicao_c3: ["vazio", 11],
      posicao_c4: ["vazio", 12],

      posicao_f1: ["vazio", 13],
      posicao_f2: ["vazio", 14],
      posicao_f3: ["vazio", 15],
      posicao_f4: ["vazio", 16],
    }



  },
  {
    jogador: 'zemiro', nivel: 5,
    inventario: {
      posicao_a1: ["K1", 1],    // area de ataque um, mais forte
      posicao_a2: ["K2", 2],     // area de ataque dois, longa distancia
      posicao_a3: ["K2", 3],    // area de ataque tres, encantamentos
      posicao_a4: ["K2", 4],    // area de ataque quatro, ataque combinado

      posicao_d1: ["K2", 5],
      posicao_d2: ["vazio", 6],
      posicao_d3: ["vazio", 7],
      posicao_d4: ["vazio", 8],

      posicao_c1: ["K2", 9],
      posicao_c2: ["vazio", 10],
      posicao_c3: ["vazio", 11],
      posicao_c4: ["vazio", 12],

      posicao_f1: ["vazio", 13],
      posicao_f2: ["vazio", 14],
      posicao_f3: ["vazio", 15],
      posicao_f4: ["vazio", 16],
    }
    ,
    inventario2: {
      posicao_a1: ["k2", 1],    // area de ataque um, mais forte
      posicao_a2: ["vazio", 2],     // area de ataque dois, longa distancia
      posicao_a3: ["vazio", 3],    // area de ataque tres, encantamentos
      posicao_a4: ["vazio", 4],    // area de ataque quatro, ataque combinado

      posicao_d1: ["vazio", 5],
      posicao_d2: ["vazio", 6],
      posicao_d3: ["vazio", 7],
      posicao_d4: ["vazio", 8],

      posicao_c1: ["vazio", 9],
      posicao_c2: ["vazio", 10],
      posicao_c3: ["vazio", 11],
      posicao_c4: ["vazio", 12],

      posicao_f1: ["vazio", 13],
      posicao_f2: ["vazio", 14],
      posicao_f3: ["vazio", 15],
      posicao_f4: ["vazio", 16],
    }



  }];

  console.log(req.params.pesquisa);
  const pesquisa = req.params.pesquisa;
  const playerTeste = player.find((jogador) => jogador.jogador === pesquisa);
  console.log(playerTeste);
  if (playerTeste) {
    // Se o jogador na URL corresponde ao jogador no objeto player,
    // retornar o objeto player como resposta
    res.json(playerTeste);
  } else {
    // Caso contrário, retornar um erro 404 (Not Found)
    res.status(404).send('Jogador não encontrado');
  }
});
// Serve os arquivos estáticos da pasta 'img'
app.use('/img', express.static('img'));

app.get('/dados', (req, res) => {
  request('https://dota2.fandom.com/pt/wiki/Atributos#Atributo_principal', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const atributoPrincipal = $('.mw-parser-output p').text();

      const dados = {
        atributoPrincipal: atributoPrincipal
      };
      res.json(dados); // retorna os dados em formato JSON
    } else {
      res.send('Erro ao carregar a página.');
    }
  });
});

// iniciando servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});