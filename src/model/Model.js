const dbConfig = require('../database/config');

class Model{

    constructor(table){
        this.table = table;
    }
    static async create(object){
        try
        {
            console.log(object)
            //arrays de keys e values para montar a SQL 
            let keys = [];
            let values = [];

            //mapeia as entradas
            for (const [key, value] of Object.entries(object)) 
            {
                if(value != null && key != "table")
                {
                    keys.push(key);
                    values.push(value);
                }
            }
            //monta a sql de busca
            const sql = `INSERT INTO ${object.table}(${keys.join(',')})` +
                        `VALUES(${values.join(',')})`;

            return sql;
            // abre a conexão com o banco
            // const db = await dbConfig.DBconnect("eymatch");

            // //roda a SQL
            // let res = db.query(sql);
            // db.end();
            // return res;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    static async read(object)
    {
        try
        {
            //monta a sql de inserção
            const sql = `SELECT * FROM ${object.table}`;

            return sql;

            // // abre a conexão com o banco
            // const db = await dbConfig.DBconnect("eymatch");

            // //roda a SQL
            // let res = db.query(sql);
            // res = res.rows[0]
            // db.end();
            // return res;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    static async update(object)
    {
        try
        {
            let entries = [];

            //mapeia as entradas
            for (const [key, value] of Object.entries(object)) 
            {
                if(value != null && key != "id" && key != "table")
                {
                    entries.push(key + "=" + value);
                }
            } 

            //monta a sql de update
            const sql = `UPDATE ${object.table} SET ${entries.join(',')} ` + 
                        `WHERE id = ${object.id}`;

            return sql;

            // // abre a conexão com o banco
            // const db = await dbConfig.DBconnect("eymatch");

            // //roda a SQL
            // let res = db.query(sql);
            // db.end();
            // return res;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    static async delete(object)
    {
        try
        {
            //monta a sql de update
            const sql = `DELETE FROM ${object.table} WHERE id = ${object.id}`;

            return sql;
            // // abre a conexão com o banco
            // const db = await dbConfig.DBconnect("eymatch");

            // //roda a SQL
            // let res = db.query(sql);
            // db.end();
            // return res;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    
    
};

module.exports = Model;