const express = require('express');
const routes = express.Router();
const dbConfig = require('.//database/config');
const clientCtrl = require('./controller/clientController');

const dataBaseController = require('./controller/databaseController/dataBaseController');
const authenticate = require('./controller/authentication');

routes.get('/',async function(req,res){
    try{
        const db = await dbConfig.DBconnect("eymatch");
        var retorno = await db.query('SELECT CURRENT_TIMESTAMP');

        res.json(retorno);
    }
    catch(e)
    {
        res.json(e.message)
    }    
    res.json()
});
routes.get('/:empresa/authenticate/empresa',authenticate.empresaExists);

routes.post('/:empresa/authenticate/user',authenticate.authenticate);

routes.post('/createDataBase',dataBaseController.createDataBase);

routes.post('/client/create',clientCtrl.create);
routes.get('/client/read',clientCtrl.read);
routes.post('/client/update',clientCtrl.update);
routes.post('/client/delete/:id',clientCtrl.delete)

module.exports = routes;