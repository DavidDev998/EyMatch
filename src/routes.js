const express = require('express');
const routes = express.Router();

routes.get('/',function(req,res){
    res.json({Message:"teste"})
});

module.exports = routes;