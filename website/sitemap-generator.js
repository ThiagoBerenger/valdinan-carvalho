const fs = require('fs');
const path = require('path');
const router = require('./src/App');  // Caminho para o seu arquivo de rotas (geralmente o App.js)
const Sitemap = require('react-router-sitemap').default;

// Gerar o sitemap
(new Sitemap(router))
  .build('https://www.valdinancarvalhoadv.com.br') // Substitua pelo seu domínio
  .save(path.resolve(__dirname, 'public', 'sitemap.xml')); // O local do arquivo sitemap.xml
