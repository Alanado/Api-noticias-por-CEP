const express = require("express");
const verificacoesEverthing = require("./intermediarios/intermediario");
const artigosENoticias = require("./controladores/noticias");
const rotas = express();


rotas.get("/pesquisa/global", verificacoesEverthing, artigosENoticias);

module.exports = rotas;