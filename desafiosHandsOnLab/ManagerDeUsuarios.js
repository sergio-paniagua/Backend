//const date = new Date()
//console.log(date.toISOString); //esto es para cambiar a archivo plano, el formato fecha (objeto) a sting 
const fs = require("fs")
class UserManager{
    constructor(){
        this.user = []
    }
    crearUsuario(usuario){
        //desestructuramos, para trabajar con un solo parametro (Objeto)
        const {nombre, apellido, edad, curso} = usuario

        const userInfo = {
            //al ser ugual la clave y el valor se puede escribir una sola vez
            nombre,
            apellido,
            edad,
            curso

        }
        this.user.push(userInfo);
        fs.promises.writeFile("./usuario.json", this.user);
    }
    consultarUsuario(){
    }
}

module.exports = UserManager;
