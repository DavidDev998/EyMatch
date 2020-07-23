const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig);
//const Person_type = sequelize.define('person_type')

const Person_fields_config = sequelize.define('Person_fields_config',{
    field_name:DataTypes.STRING,
    on_off:DataTypes.BOOLEAN,
    required:DataTypes.BOOLEAN,
    excluded_at:DataTypes.DATE
},{
    tableName: 'person_fields_config'
});

//Person_fields_config.belongsTo(Person_type,{foreignKey:'person_id',as:'persons'});

module.exports = Person_fields_config;