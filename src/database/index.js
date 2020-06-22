//import sequelize
const Sequelize = require('sequelize');
//import as configs no  config/database.js
const dbConfig = require('../config/database');
//abre  uma conexão com o database de acordo com as configs
const connection = new Sequelize(dbConfig);

module.exports= connection;