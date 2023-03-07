//siguiendo las especificaciones del ejercicio de la clase
const fs = require ("fs")
const {Blob} = require("buffer")  //investigar sobre esto, permite saber el tamaño del archivo

const infoPackage = async () => {
     //no tengo que crear el archivo porque ya existe (El JSON), solamente lo leo
        const data = await fs.promises.readFile("./package.json", "utf-8")
    //JSON.stringify() para cambiar de formato json a formato string
    //JSON.parse() para cambiar del formato string a formato JSON
    const info = {
        contenidoSrt: JSON.stringify(data),
        contenidoObj: JSON.parse(data),
        size: new Blob([data]).size //tamaño del archivo
    } 
    console.log (info)
    }

infoPackage()