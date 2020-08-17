const dbConfig = require('../database/config');

class Model{
    #table;
    constructor(table){
        this.#table = table;
    }
    getTable(){
        return this.#table;
    }
    setTable(table){
        this.#table = table;
    }

    static async create(object){
        try
        {
            //arrays de keys e values para montar a SQL 
            let keys = [];
            let values = [];

            //mapeia as entradas
            for (const [key, value] of Object.entries(object)) 
            {
                keys.push(key);
                values.push(value);
            } 

            //monta a sql de busca
            const sql = `INSERT INTO client(${keys.join(',')})
                        VALUES(${values.join(',')})`;

            console.log(sql);
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
    static async read()
    {
        try
        {
            //monta a sql de inserção
            const sql = `SELECT * FROM ${table}`;

            // abre a conexão com o banco
            const db = await dbConfig.DBconnect("eymatch");

            //roda a SQL
            let res = db.query(sql);
            res = res.rows[0]
            db.end();
            return res;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    static async update(object,uuid)
    {
        try
        {
            let entries = [];

            //mapeia as entradas
            for (const [key, value] of Object.entries(object)) 
            {
                entries.push(key + "=" + value);
            } 

            //monta a sql de update
            const sql = `UPDATE ${this.#table} SET ${entries.join(',')}` + 
                        `WHERE  uuid = ${uuid}`;

            // abre a conexão com o banco
            const db = await dbConfig.DBconnect("eymatch");

            //roda a SQL
            let res = db.query(sql);
            db.end();
            return res;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    static async delete(uuid)
    {
        try
        {
            //monta a sql de update
            const sql = `DELETE FROM ${this.#table} WHERE uuid = ${uuid}`;
            // abre a conexão com o banco
            const db = await dbConfig.DBconnect("eymatch");

            //roda a SQL
            let res = db.query(sql);
            db.end();
            return res;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    
    
};

module.exports = Model;