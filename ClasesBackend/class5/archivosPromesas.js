//archivos en JS ASINCRONICOS 
const fs = require("fs")

const file = "./archivosPromesas.txt"
//Usamos async/await para hacer el codigo mas simple q si usamos .then y ,chat (recordar que si hay un error..
//debemos capatarlo) es decir con un modulo try/catch
//lo que esta en el try se ejecuta y si hay un error se capta en el catch
const operacionesAsincronicas = async ()=> {

    try {
        //ESCRIBO o CREO o SOBRE-ESCRIBO el archivo
        await fs.promises.writeFile(file, "Archivos con promesas")
        //se LEE el archivo
        const data =  await fs.promises.readFile(file, "utf-8")
        console.log(data)
        //se ACTUALIZA O MODIFICA
        await fs.promises.appendFile (file, " Actualizando con promesas")
    
        const newData = await fs.promises.readFile(file, "utf-8")
        console.log.apply(newData);
        
    } catch (error) {
        console.log(error)
    }
}

operacionesAsincronicas()