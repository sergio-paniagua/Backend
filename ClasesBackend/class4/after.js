//FUNCIONES SINCRONICAS
//declaracion de funciones sincronicas, lo primero que hace es el proceso de hosting, es decir:
//lee las lienas de codigo y establece prioridades, segun sea variable (Var/let/const) o funcion.

//***Saber conceptos de memory hill, call stack y hosting***

//let y const no hace se hace el preoceso de hosting, sino que se reserva un espacio de memoria en
//la Dead Zone. Si no esta declarado, nos sale un error que dice , "no se ha inicializado", pero sabe q 
//existe esa variable. Esto no pasa si se declara var, por eso no se utiliza!!! 
//var no va a la dead zone, y se declaran como underfined y esto genera problemas!! 

const otraFuncion = require("./otraFuncion")
//aca traigo la funcion q declare en otra carpeta (la importo), esta se ejecuta de la siguiente manera,
//se produce el hosting, pero la funcion se retira de la callback y se manda a una webApi, y se ejecuta el 
//eventLoop! El eventloop va sav¡cando los mensajes segun vayan llegando! Esto es el asincronismo

function a(){
    console.log("inicio")
    b();
}
function b(){
    console.log("continuo")
    c();
}
function c(){
    console.log("finalizo")
}
//ejecucion de la funcion asincronica 
console.log(1);
otraFuncion();
console.log(2);


