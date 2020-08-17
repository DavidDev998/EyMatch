const Client = require('../model/Client')

module.exports = {
    async create(req,res){
        const client = req.body;

        var retorno = await Client.create(client);
        res.json(retorno);
    }
}