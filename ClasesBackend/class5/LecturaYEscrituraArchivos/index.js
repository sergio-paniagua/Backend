
//siguiendo las especificaciones del ejercicio de la clase
const fs = require ("fs")
const {Blob} = require("buffer")  //investigar sobre esto, permite saber el tamaño del archivo

const infoPackage = async () => {
    try {
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
        //Creo la carpeta info.json para guardar la info generada (tiene q estar en formato json)
        const newData = await fs.promises.readFile("./info.json", "utf-8")
        const dataJson = JSON.parse(newData)
        console.log(dataJson)
           //se ACTUALIZA O MODIFICA
           await fs.promises.appendFile ("./info.json", info.contenidoObj)
    
    } catch (error) {
    console.log(error)
    }
    }
infoPackage()