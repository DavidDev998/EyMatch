const express = require('express');
const routes = express.Router();
const dbConfig = require('.//database/config');
const clientCtrl = require('./controller/clientController');
const attendanceCtrl = require('./controller/attendanceController')
const productCtrl = require('./controller/productController')
const paymentCtrl = require('./controller/paymentController')
const providerCtrl = require('./controller/providerController')
const configCtrl = require('./controller/configController')

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
routes.get('/:empresa/authenticate/empresa',authenticate.companyExists);

routes.post('/:empresa/authenticate/user',authenticate.authenticate);

routes.post('/createDataBase',dataBaseController.createDataBase);

routes.post('/:company/client/create',clientCtrl.create);
routes.get('/:company/client/read',clientCtrl.read);
routes.get('/:company/client/read/:id',clientCtrl.readById);
routes.post('/:company/client/update',clientCtrl.update);
routes.delete('/:company/client/delete/:id',clientCtrl.delete);


routes.post('/:company/product/create',productCtrl.create)
routes.get('/:company/product/read',productCtrl.read)
routes.get('/:company/product/read/:id',productCtrl.readById);
routes.post('/:company/product/update',productCtrl.update)
routes.delete('/:company/product/delete/:id',productCtrl.delete)

routes.post('/:company/attendance/create',attendanceCtrl.create);
routes.get('/:company/attendance/read',attendanceCtrl.read);
routes.get('/:company/attendance/read/:id',attendanceCtrl.readById);
routes.post('/:company/attendance/update/:id',attendanceCtrl.update)
routes.delete('/:company/attendance/delete/:id',attendanceCtrl.delete)

routes.post('/:company/payment/create',paymentCtrl.create)
routes.get('/:company/payment/read',paymentCtrl.read)
routes.get('/:company/payment/read/:id',paymentCtrl.readById);
routes.post('/:company/payment/update',paymentCtrl.update)
routes.delete('/:company/payment/delete/:id',paymentCtrl.delete)

routes.post('/:company/provider/create',providerCtrl.create)
routes.get('/:company/provider/read',providerCtrl.read)
routes.get('/:company/provider/read/:id',providerCtrl.readById);
routes.post('/:company/provider/update',providerCtrl.update)
routes.delete('/:company/provider/delete/:id',providerCtrl.delete)

routes.get('/:company/config/readByFilter',configCtrl.readByFilter)

module.exports = routes;