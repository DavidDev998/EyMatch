const pg = require('pg');
const fs = require('fs');
const dbConfig = require('../../database/config');

module.exports = {
    async createTables(database){
        try
        {
            const db = await dbConfig.DBconnect(database);
            const tables = ['client.sql']
            tables.forEach(async element =>{
                var sql = fs.readFileSync(`D:\\ProjetosGit\\EyMatch\\src\\database\\tables\\${element}`).toString();
                await(db.query(sql));
            })          
            var retorno = "success"
            return retorno;
        }
        catch(e)
        {
            return e.message;
        }
    }
}