const { Model } = require("sequelize");

//exporta as configurações de acesso ao banco de dados
module.exports = {
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'root',
    database:'eymatch',
    define:{
        timestamps: true,
        underscored: true,
        freezeTableName: true
    },
};