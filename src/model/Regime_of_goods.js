const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('Person')


const Regime_of_goods = sequelize.define('Regime_of_goods', {
    name:DataTypes.STRING,
    note:DataTypes.STRING,
    score:DataTypes.REAL,
    excluded_at: DataTypes.DATE,
  }, {
    // Other model options go here
    tableName: 'regime_of_goods'
  });

Regime_of_goods.hasOne(Person,{ foreignKey:'fk_regime_de_bens', through:'person', as: 'persons' })

module.exports = Regime_of_goods;