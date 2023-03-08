//MANEJO DE ARCHIVOS EN JS
//file sistem. Libreria para trabajar con archivos

//UTLIZADA DE FORMA SINCRONICA (Sync)

const fs = require ("fs");
const file = "./archivosSincronico.txt"

fs.writeFileSync(file, "Bienvenidos a todos")

//Creamos una constante para leer archivos, que se ejecuta de forma Sincronica (Sync)

const data = fs.readFileSync(file, "utf-8");
console.log(data);

fs.appendFileSync(file, "Holaaaa")
const newData =  fs.readFileSync(file, "utf-8");
console.log(newData)