const { Model } = require("sequelize");
module.exports = {
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'root',
    database:'eymatch',
    define:{
        timestamps: true,
        underscored: true
    },
};