const express = require('express');
const routes = express.Router();
const dbConfig = require('.//database/config');
const clientCtrl = require('./controller/clientController');
const attendanceCtrl = require('./controller/attendanceController')

const dataBaseController = require('./controller/databaseController/dataBaseController');
const authenticate = require('./controller/authentication');
const { read } = require('./model/Model');

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
routes.get('/:empresa/authenticate/empresa',authenticate.companyExists);

routes.post('/:empresa/authenticate/user',authenticate.authenticate);

routes.post('/createDataBase',dataBaseController.createDataBase);

routes.post('/:company/client/create',clientCtrl.create);
routes.get('/:company/client/read',clientCtrl.read);
routes.get('/:company/client/read/:id',clientCtrl.readById);
routes.post('/:company/client/update',clientCtrl.update);
routes.post('/:company/client/delete/:id',clientCtrl.delete);
routes.post('/:company/attendance/create',attendanceCtrl.create);
routes.get('/:company/attendance/read',attendanceCtrl.read);
routes.post('/:company/attendance/update/:id',attendanceCtrl.update)

module.exports = routes;