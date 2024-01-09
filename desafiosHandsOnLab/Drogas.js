//import { readFile, writeFile } from 'fs';
const fs = require('fs');
const { resolve } = require('path');
const {Blob} = require("buffer");  //investigar sobre esto, permite saber el tamaño del archivo
const { info } = require('console');

 
//Crear un arrays y luego pasar a formato JSON para almacenar en la base de datos
let arrayDB = [
    { id: 1, sustancia: ['Cocaina'], pureza: 63, adulterante: ["Almidon", "Levamisol"], solventes_residuales: [""]},
    { id: 2, sustancia: ['MDMA'], pureza: null, adulterante: ["Cafeina"], solventes_residuales: [""]},
    { id: 3, sustancia: ['MDMA'], pureza: null, adulterante: ["Ketamina"], solventes_residuales: [""] }
  ];
  
  // Objeto a formato JSON
  const jsonResultado = JSON.stringify(arrayDB);
  
  // Se muestra el resultado en la consola
  console.log(jsonResultado);

//Se crear un archivo json donde se almacenan los resultados
  function crearArchivoJSON(datos, nombreArchivo) {
    return new Promise((resolve, reject) => {
      const contenidoJSON = JSON.stringify(datos, null, 2);
      //funcion para crear archivo y guardar el contenido en formato JSON
      fs.writeFile(nombreArchivo, contenidoJSON, 'utf8', (err) => {
        if (err) {
          reject('Error al crear el archivo: '+err);
        } else {
          resolve('Base de datos JSON creada exitosamente.');
        }
      });
    })
  }  

  //funcion para acceder a la informacion usando promesas

// Ruta al archivo JSON local
const jsonFilePath = 'datos.json';

// Función para leer y mostrar el contenido del archivo JSON
function mostrarArchivoJSON (datos, filePath) {
  return new Promise ((resolve, reject)=> {
    fs.readFile(filePath, 'utf-8', (err)=> {
      const contenidoJSON = JSON.stringify(datos, null, 2);
      console.log(contenidoJSON);
      if (err){
        reject('Error al leer el archivo: '+err);
      }else {
        resolve('Se muestra el archivo en consola.');
      }
    });
})
}


//probando otro metodo para acceder y mostrar la informacion en consola
const infoBD= async () => {
  try {
      //no tengo que crear el archivo porque ya existe (El JSON), solamente lo leo
         const data = await fs.promises.readFile("./datos.json", "utf-8")
     //JSON.stringify() para cambiar de formato json a formato string
     //JSON.parse() para cambiar del formato string a formato JSON
     const info = {
         contenidoSrt: JSON.stringify(data),
         contenidoObj: JSON.parse(data),
         size: new Blob([data]).size //tamaño del archivo
     } 
 
     const {contenidoSrt, ...rest} = info;
     const infojson ={
     ...rest
     }
     console.log (info)
     await fs.promises.appendFile("./datos.json", JSON.stringify(infojson)); 
     const newData = await fs.promises.readFile("./datos.json", "utf-8") 
     console.log(newData);
      
  } catch (error) {
      console.log(error, "No se puede crear el archivo")
  }
  }

// Nueva info para agregar al array existente, usando el método push 
let newData = [
  { id: 1, sustancia: ['Cocaina'], pureza: 63, adulterante: ["Almidon", "Levamisol"], solventes_residuales: [""], ley: true},
  { id: 2, sustancia: ['MDMA'], pureza: null, adulterante: ["Cafeina"], solventes_residuales: [""], ley: true},
  { id: 3, sustancia: ['MDMA'], pureza: null, adulterante: ["Ketamina"], solventes_residuales: [""], ley: true },
  { id: 4, sustancia: ['CBD'], pureza: null, adulterante: [""], solventes_residuales: [""], ley: false },
];

arrayDB.push(newData);
console.log(arrayDB);


// El método appendFile agrega la nueva info al archivo
function actualizarDatos (datos, nombreArchivo){
  const newDataJSON = JSON.stringify(datos, null, 2);
  fs.appendFile(nombreArchivo, newDataJSON, (err) => {
    if (err) {
      console.error('Error al agregar información al archivo:', err);
    } else {
      console.log('Información agregada correctamente al archivo.');
    }
  });
}

function mostrarInfo() {
  fetch(nombreArchivo)
  .then(data => data.json())
  .then(data2 => {
    //let obj = JSON.parse(data2)
    console.log("Se muestra la informacion de la BD")
    console.table(data2),
    console.log(data2);
})
.catch(error => {
  console.log ("ERROR AL ACCEDER A LA INFORMACION: "+ error)
})
};

function mostrarBD(){
  // Utiliza la API Fetch para obtener el archivo JSON
fetch(nombreArchivo)
.then(response => {
  if (!response.ok) {
    throw new Error('Error al cargar el archivo JSON');
  }
  return response.json();
})
.then(jsonData => {
  // Muestra el contenido del archivo JSON en la consola
  console.log(jsonData);
})
.catch(error => {
  console.error('Error:', error);
});
};

function mostrartxt(){
  fetch("info.txt")
  .then(data => data.txt())
  .then(data2 => {
    //let obj = JSON.parse(data2)
    console.log("Se muestra la informacion de la BD")
    console.log(data2);
})
.catch(error => {
  console.log ("ERROR AL ACCEDER A LA INFORMACION: "+ error)
})
.finally(()=> {
  console.log ("La funcion finalizo")
})
};


  // Probando la funcion 
  const nombreArchivo = 'datos.json';
  console.log (" Se muestra el array con la informacion agregada: ")
  console.log(arrayDB);

  crearArchivoJSON(arrayDB, nombreArchivo)
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    // Llama a la función con la ruta del archivo JSON


infoBD();
mostrartxt();


