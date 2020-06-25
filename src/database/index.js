//import sequelize
const Sequelize = require('sequelize');

//import as configs no  config/database.js
const dbConfig = require('../config/database');

//importa o model
const Person = require('../model/Person');
const JuridicalPerson =  require('../model/JuridicalPerson');

//abre  uma conexão com o database de acordo com as configs
const connection = new Sequelize(dbConfig);

//instancia os models
Person.init(connection);
JuridicalPerson.init(connection);


module.exports= connection;