const Client = require('../model/Client');

module.exports = {
    async create(req,res){
        const client = req.body;
        let newclient = new Client(client)

        var retorno = await Client.create(newclient);
        res.json(retorno);
    },
    async read(req,res){
        const client = new Client(new Object());
        console.log(client);
        var retorno = await Client.read(client);
        res.json(retorno);
    },
    async update(req,res){
        const client = req.body;
        let toUpdate = new Client(client)

        var retorno = await Client.update(toUpdate);
        res.json(retorno);
    },
    async delete(req,res){
        const toDelete = new Client(req.params);
        
        
        var retorno = await Client.delete(toDelete);
        res.json(retorno);
    }
}