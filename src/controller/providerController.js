const Provider = require('../model/Provider');

module.exports = {
    async create(req,res){
        const company = req.params.company;
        const provider = req.body;
        let newProvider = new Provider(provider,company)
        var retorno = await Provider.create(newProvider);
        res.json(retorno);
    },
    async read(req,res){
        const company = req.params.company;
        const provider = new Provider(new Object(),company);
        var retorno = await Provider.read(provider);
        res.json(retorno);
    },
    async update(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const updateProvider = req.body;
        updateProvider.id = id;
        
        const updated = new Provider(updateProvider,company)

        var retorno = await Provider.update(updated);
        return retorno
    },
    async delete(req,res){
        const company = req.params.company;
        const toDelete = new Provider(req.params,company);
        
        
        var retorno = await Provider.delete(toDelete);
        res.json(retorno);
    },
    async readById(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const provider = new Provider(new Object(),company);
        provider.id = id;

        var retorno = await Provider.readById(provider);
        res.json(retorno.rows[0]);
    }
}