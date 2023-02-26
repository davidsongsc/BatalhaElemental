
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const cheerio = require('cheerio');


const app = express();

// middlewares
app.use(bodyParser.json());
app.use(cors());

// rotas
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// iniciando servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Rota para json
app.get('/elementos', (req, res) => {
  const elementos = require('./elementos.json');
  res.json(elementos);
});

// Rota para json
app.get('/classesapi', (req, res) => {
  const classesapi = require('./classesapi.json');
  res.json(classesapi);
});

// Serve os arquivos estáticos da pasta 'img'
app.use('/img', express.static('img'));

app.get('/dado', (req, res) => {
  request('https://dota2.fandom.com/pt/wiki/Atributos#Atributo_principal', (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      // Aqui você pode usar o objeto $ para fazer web scraping
      const pageTitle = $('title').text();
      const atributoPrincipal = $('.mw-parser-output p').text();
      res.send(`${atributoPrincipal}`);

    } else {
      res.send('Erro ao carregar a página.');
    }
  });
});
