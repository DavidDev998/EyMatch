const Person  = require('../model/Person')

module.exports ={
    async create(req,res){
        const  newUser = req.body;
        const user = await Person.create(newUser);

        return res.json(user);
    },

    async index(req,res){
        const listPerson = await Person.findAll();
        return res.json(listPerson);
    },

    async delete(req,res){
        try{
            const pk =  parseInt(req.params.pk);
            const excludePerson = await Person.findByPk(pk);

            await excludePerson.destroy();

            return res.json({Message:"Pessoa " + excludePerson.name + " excluida"});
        }catch(e)
        {   
            res.status(401)
            res.json({Message:"Erro " + e.Message})
        }
        
    }
}