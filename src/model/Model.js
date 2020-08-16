const crudController = require('../controller/crudController')
const dbConfig = require('../database/config');

class Model{
    #table = "default";
    constructor(){

    }
    getTable(){
        return this.#table;
    }

    async create(object){
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

            //monta a sql de inserção
            const sql = `INSERT INTO ${this.#table}(${keys.join(',')})` + 
                        `VALUES(${values.join(',')})`;

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
    async read()
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
    async update()
    {

    }
    
    
};