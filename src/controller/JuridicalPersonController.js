const Juridical_Person = require('../model/JuridicalPerson');

module.exports = {
    async create(req,res){
        const judicalPerson = req.body;
        const newJuridicalPerson = await Juridical_Person.create(judicalPerson);

        return res.json(newJuridicalPerson);
    },

    async index(req,res){
        const listJuridicalPerson = await Juridical_Person.findAll();
        return res.json(listJuridicalPerson);
    }
}