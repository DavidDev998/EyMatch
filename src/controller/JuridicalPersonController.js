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
    },

    async delete(req,res){
        try{
            const pk =  parseInt(req.params.pk);
            const excludeJuridicalPerson = await Juridical_Person.findByPk(pk);

            await excludeJuridicalPerson.destroy();

            return res.json({Message:"Pessoa " + excludeJuridicalPerson.name + " excluida"});
        }catch(e)
        {   
            res.status(401)
            res.json({Message:"Erro " + e.Message})
        }
        
    }
}