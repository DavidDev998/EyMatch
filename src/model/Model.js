const dbConfig = require('../database/config');

class Model{

    constructor(table,company){
        this.table = table;
        this.company = company
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
                if(value != null && value != '' && key != "table" && key != "company")
                {
                    keys.push(key);
                    if(/^\d+$/.test(value)){
                        values.push(+value)
                    }else{
                        values.push(`'${value}'`)
                    }
                }
            }
            keys.push('created_at');
            values.push(`'${new Date().toUTCString()}'`)
            //monta a sql de busca
            const sql = `INSERT INTO ${object.table}(${keys.join(',')})` +
                        `VALUES(${values.join(",")})`;

            //abre a conexão com o banco
            const db = await dbConfig.DBconnect(object.company);

             
            //roda a SQL
            let res = await db.query(sql);
            db.end();
            return "Inserido com sucesso";
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

            // abre a conexão com o banco
            const db = await dbConfig.DBconnect(object.company);

            //roda a SQL
            let res = await db.query(sql);
            db.end();
            return res.rows;
        }
        catch(e)
        {
            return "Erro : " + e.message;
        }
    }
    static async update(object)
    {
        console.log(object)
        try
        {
            let entries = [];

            for (const [key, value] of Object.entries(object)) 
            {
                if(value != null && value != '' && key != "table" && key != "company" && key != "id")
                {
                    if(/^\d+$/.test(value)){
                        entries.push(`${key} = ${+value}`)
                    }else{
                        entries.push(`${key} = '${value}'`)
                    }
                }
            }

            //monta a sql de update
            const sql = `UPDATE ${object.table} SET ${entries.join(',')} ` + 
                        `WHERE id = '${object.id}'`;

            // abre a conexão com o banco
            const db = await dbConfig.DBconnect(object.company);

            //roda a SQL
            let res = await db.query(sql);
            db.end();
            return "Atualizado com sucesso";
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
    static async readById(object){
        try
        {
            //monta a sql de inserção
            const sql = `SELECT * FROM ${object.table} WHERE id = '${object.id}'`;

            // abre a conexão com o banco
            const db = await dbConfig.DBconnect(object.company);

            //roda a SQL
            let res = await db.query(sql);
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