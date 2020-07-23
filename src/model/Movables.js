const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('Person')


const Movables = sequelize.define('Movables', {
    name:DataTypes.STRING,
    value:DataTypes.REAL,
    note:DataTypes.STRING,
    score:DataTypes.REAL,
    excluded_at: DataTypes.DATE,
  }, {
    // Other model options go here
    tableName: 'movables'
  });

  Movables.belongsTo(Person,{ foreignKey:'person_id', as: 'person' });

module.exports = Movables;