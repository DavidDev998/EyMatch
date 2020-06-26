const Person  = require('../model/Person');
const Immovable = require('../model/Immovable_property');
const Movable = require('../model/Movables');
const Profession = require('../model/Profession');
const Civil_status = require('../model/Civil_status');
const Regime_of_goods = require('../model/Regime_of_goods');
const { findByPk } = require('../model/Person');


module.exports ={
    //cria Person
    async create(req,res){
        try
        {
            const { person} = req.body;
            const { immovable}  = req.body;
            const { movable}  = req.body;
            const { profession}  = req.body;
            const { civil_status} = req.body;
            const { regime_of_goods} = req.body;
            
            let newPerson = new Person();
            let newImmovable = new Immovable();
            let newMovable = new Movable();
            let newProfession = new Profession();
            //cria Person
            if(person != null)
            {
                newPerson = await Person.create(person);
            }
            //cria immovable_property
            if(immovable != null)
            {
                newImmovable  = await Immovable.create({
                    name:immovable.name,
                    value:immovable.value,
                    note:immovable.note,
                    score:immovable.score,
                    fk_person:newPerson.id,
                });
                //vincula immovable a person
                newPerson.addImmovables([newImmovable]);    
            }
            
            // Cria movable
            if(movable !=  null){
                newMovable = await Movable.create({
                    name:movable.name,
                    value:movable.value,
                    note:movable.note,
                    score:movable.score,
                    fk_person:newPerson.id,
                });
                // vincula Movable a person
                newPerson.addMovable([newMovable]);
            }
            //Vincula a uma profissao
            newProfession = await Profession.findByPk(profession);
            if(newProfession != null)
            {
                newPerson.setProfession(newProfession.id);
            }
            //vincula a stado  civil
            newCivil_status = await Civil_status.findByPk(civil_status);
            if(newCivil_status != null)
            {
                newPerson.setCivil_status(newCivil_status.id);
            }
            //vincula a regime de  bens
            newRegimeOfGoods = await Regime_of_goods.findByPk(regime_of_goods);
            if(newRegimeOfGoods != null)
            {
                newPerson.setRegime_of_goods(newRegimeOfGoods.id);
            }
            return res.json({Person:newPerson});
        }
        catch(e)
        {
            return res.json({Message:"Erro: " + e})
        }
        
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