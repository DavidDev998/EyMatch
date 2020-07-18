const dbConfig = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const { belongsTo } = require('./Address');
const sequelize = new Sequelize(dbConfig);
const Product = sequelize.define('Product');

const Sample = sequelize.define('Sample',
{
    name          : DataTypes.STRING,
    opening_hours : DataTypes.DATE,
    reserved      : DataTypes.BOOLEAN,
    launch        : DataTypes.DATE,
    phone         : DataTypes.STRING,
    address       : DataTypes.UUID,
},
{
    tableName : 'sample'
})

Sample.belongsTo(Product, { foreignKey: 'sample_id', through: 'sample', as: 'samples'})

module.exports = Sample;