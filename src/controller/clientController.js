const { ClientBase } = require('pg');
const Client = require('../model/Client');

module.exports = {
    async create(req,res){
        const company = req.params.company;
        const client = req.body;
        let newclient = new Client(client,company)
        var retorno = await Client.create(newclient);
        res.json(retorno);
    },
    async read(req,res){
        const company = req.params.company;
        const client = new Client(new Object(),company);
        var retorno = await Client.read(client);
        res.json(retorno);
    },
    async update(req,res){
        const client = req.body;
        const company = req.params.company;
        let toUpdate = new Client(client,company)

        var retorno = await Client.update(toUpdate);
        res.json(retorno);
    },
    async delete(req,res){
        const company = req.params.company;
        const toDelete = new Client(req.params,company);

        var retorno = await Client.delete(toDelete);
        res.json(retorno);
    },
    async readById(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const client = new Client(new Object(),company);
        client.id = id;
        var retorno = await Client.readById(client);
        res.json(retorno.rows[0]);
    }
}