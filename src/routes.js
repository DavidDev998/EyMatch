//IMPORT DO EXPRESS
const express = require('express');
const routes = express.Router();

//IMPORTAÇÃO DAS CONTROLLERS
const PersonController = require('./controller/PersonController');
const JuridicalPersonController = require('./controller/JuridicalPersonController');

//TODO: SEPARAR AS ROTAS DE CADA CONTROLLER EM ARQQUIVOS DIFERENNTES


//ROTAS DE  PERSON
routes.post('/Person/Create', PersonController.create);
routes.get('/Person',PersonController.index);
//TODO:MÉTODOS DELETE AND UPDATE

//ROTAS DE JURIDICAL PERSON
routes.post('/JuridicalPerson/Create', JuridicalPersonController.create);
routes.get('/JuridicalPerson',JuridicalPersonController.index);
//TODO:MÉTODOS DELETE AND UPDATE

module.exports = routes;
