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
routes.post('/Person/Update/', PersonController.update);

//ROTAS DE PROFESSION
routes.post('/profession/create',ProfessionController.create);
routes.get('/profession/index',ProfessionController.index);
routes.post('/profession/update',ProfessionController.update);
routes.post('/profession/delete/:pk',ProfessionController.delete);

//ROTAS DE ESTADO CIVIL
routes.post('/civil_status/create',Civil_statusController.create);
routes.get('/civil_status/index',Civil_statusController.index);
routes.post('/civil_status/update',Civil_statusController.update);
routes.post('/civil_status/delete/:pk',Civil_statusController.delete);

//ROTAS DE REGIME DE BENS
routes.post('/regime_of_goods/create',RegimeOfGoodsController.create);
routes.get('/regime_of_goods/index',RegimeOfGoodsController.index);
routes.post('/regime_of_goods/update',RegimeOfGoodsController.update);
routes.post('/regime_of_goods/delete/:pk',RegimeOfGoodsController.delete);


//ROTAS DE JURIDICAL PERSON
routes.post('/JuridicalPerson/Create', JuridicalPersonController.create);
routes.get('/JuridicalPerson',JuridicalPersonController.index);
routes.post('/JuridicalPerson/Delete/:pk', JuridicalPersonController.delete)
//TODO:MÉTODOS DELETE AND UPDATE


module.exports = routes;
