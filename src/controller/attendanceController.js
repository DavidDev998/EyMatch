const Attendance = require('../model/Atendimento');

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
        const toDelete = new Client(req.params);
        
        
        var retorno = await Client.delete(toDelete);
        res.json(retorno);
    },
    async updateStatus(req,res){
        const id = req.params.id;
        const company = req.params.company;
        const attendance = new Object();
        attendance.id = id;
        attendance.etapa = req.body.etapa;
        
        const newStatus = new Attendance(attendance,company)

        var retorno = await Attendance.update(newStatus);
        return retorno
    }
}