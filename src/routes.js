//IMPORT DO EXPRESS
const express = require('express');
const routes = express.Router();

//IMPORTAÇÃO DAS CONTROLLERS
const PersonController = require('./controller/PersonController');
const Civil_statusController = require('./controller/CivilStatusController');
const ProfessionController = require('./controller/ProfessionController');
const RegimeOfGoodsController = require('./controller/RegimeOfGoodsController');
const JuridicalPersonController = require('./controller/JuridicalPersonController');

//TODO: SEPARAR AS ROTAS DE CADA CONTROLLER EM ARQQUIVOS DIFERENNTES


//ROTAS DE  PERSON
routes.post('/Person/Create', PersonController.create);
routes.get('/Person',PersonController.index);
routes.get('/Person/Delete/:pk', PersonController.delete);

routes.post('/profession/create',ProfessionController.create);

routes.post('/civil_status/create',Civil_statusController.create);

routes.post('/regime_of_goods/create',RegimeOfGoodsController.create);
//TODO:MÉTODOS DELETE AND UPDATE

//ROTAS DE JURIDICAL PERSON
routes.post('/JuridicalPerson/Create', JuridicalPersonController.create);
routes.get('/JuridicalPerson',JuridicalPersonController.index);
routes.post('/JuridicalPerson/Delete/:pk', JuridicalPersonController.delete)
//TODO:MÉTODOS DELETE AND UPDATE


module.exports = routes;
