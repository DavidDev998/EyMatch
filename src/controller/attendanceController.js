const Attendance = require('../model/Attendance');

module.exports = {
    async create(req,res){
        const company = req.params.company;
        const atendimento = req.body;
        let newAtendimento = new Attendance(atendimento,company)
        var retorno = await Attendance.create(newAtendimento);
        res.json(retorno);
    },
    async read(req,res){
        const company = req.params.company;
        const atendimento = new Attendance(new Object(),company);
        var retorno = await Attendance.read(atendimento);
        res.json(retorno);
    },
    async update(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const updateAttendance = req.body;
        updateAttendance.id = id;
        
        const updated = new Attendance(updateAttendance,company)

        var retorno = await Attendance.update(updated);
        return retorno
    },
    async delete(req,res){
        const company = req.params.company;
        const toDelete = new Attendance(req.params,company);
    
        var retorno = await Attendance.delete(toDelete);
        res.json(retorno);
    },
    async readById(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const attendance = new Attendance(new Object(),company);
        attendance.id = id;

        var retorno = await Attendance.readById(attendance);
        res.json(retorno.rows[0]);
    }
}