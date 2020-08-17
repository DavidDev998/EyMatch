const pg = require('pg');
const fs = require('fs');
const dbConfig = require('../../database/config');
const TablesController = require('./tablesController');

module.exports  = {
    async createDataBase(req,res){
        try{
            const {databaseName} = req.body;

            //conecta no servidorPostgres
            const db = await dbConfig.DBconnect("");
            //cria o database
            await(db.query(`CREATE DATABASE ${databaseName}`));
            var retorno_database = "success"
            //cria as tabelas
            var retorno_tables = await TablesController.createTables(databaseName);
            console.log(retorno_tables);

            res.json({Database : retorno_database,Tables : retorno_tables}); 
        }
        catch(e)
        {
            res.json(e.message);
        }
    }
}