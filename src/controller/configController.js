const Config = require('../model/Configuration');

module.exports = {
    async create(req,res){
        const company = req.params.company;
        const config = req.body;
        let newConfig = new Config(config,company)
        var retorno = await Config.create(newConfig);
        res.json(retorno);
    },
    async read(req,res){
        const company = req.params.company;
        const config = new Config(new Object(),company);
        var retorno = await Config.read(config);
        res.json(retorno);
    },
    async update(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const updateConfig = req.body;
        updateConfig.id = id;
        
        const updated = new Config(updateConfig,company)

        var retorno = await Config.update(updated);
        return retorno
    },
    async delete(req,res){
        const toDelete = new Config(req.params);
        
        
        var retorno = await Config.delete(toDelete);
        res.json(retorno);
    },
    async readById(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const config = new Config(new Object(),company);
        config.id = id;

        var retorno = await Config.readById(config);
        res.json(retorno.rows[0]);
    },
    async readByFilter(req,res){
        const company = req.params.company;
        const filter = req.query;
        const config = new Config(filter,company);

        var retorno = await Config.readByFilter(config);
        res.json(retorno.rows[0]);
    }
}