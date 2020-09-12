const db_config = require('../database/config')

module.exports = {
    async authenticate(req,res){
        const {user} = req.body;
        const {empresa} = req.body;
        
        let userReturn = new Object();
        userReturn.athenticated = false;

        if(user){
            const db = await db_config.DBconnect(empresa);
            const userAuthenticated = await (await db.query(`SELECT * FROM users WHERE login='${user.login}'`));
            if(userAuthenticated.rows[0]){
                if(userAuthenticated.rows[0].password == user.password){
                    userReturn.login = userAuthenticated.rows[0].login;
                    userReturn.name = userAuthenticated.rows[0].name;
                    userReturn.athenticated = true;
                    userReturn.message = "Usuário autenticado com sucesso";
                }
                else{
                    userReturn.message = "Senha incorreta"
                }
            }else{
                userReturn.message = "Usuário inválido"
            }
            res.json(userReturn);
        }else{
            res.json({teste:"foda-se"});
        }
        
    }
}