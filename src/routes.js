const express = require('express');
const routes = express.Router();
const dbConfig = require('./database/config');

const dataBaseController = require('./controller/dataBaseController');

routes.get('/',async function(req,res){
    try{
        const db = await dbConfig.DBconnect("eymatch");
        var retorno = await db.query('SELECT CURRENT_TIMESTAMP');

        res.json(retorno.rows[0]);
    }
    catch(e)
    {
        res.json(e.message)
    }    
    res.json()
});

routes.post('/createDataBase',dataBaseController.createDataBase)

module.exports = routes;