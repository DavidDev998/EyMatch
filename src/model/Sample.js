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
},
{
    tableName : 'sample'
})

Sample.belongsTo(Product, { foreignKey: 'product_id', as: 'samples'})

module.exports = Sample;