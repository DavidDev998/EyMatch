const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
const Person = sequelize.define('Person')


const Immovable_property = sequelize.define('Imovable_property', {
    name:DataTypes.STRING,
    value:DataTypes.REAL,
    note:DataTypes.STRING,
    score:DataTypes.REAL,
    excluded_at: DataTypes.DATE,
  }, {
    // Other model options go here
    tableName: 'immovable_property'
  });

Immovable_property.belongsTo(Person,{ foreignKey:'person_id', as: 'Person' })

module.exports = Immovable_property;