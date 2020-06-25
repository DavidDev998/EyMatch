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
    }
}