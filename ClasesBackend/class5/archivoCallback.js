const fs = require("fs");

const file = "./archivoCallback.txt";
//Escribimos el archivo
fs.writeFile(file, "archivo con callback", (error) => {
  if (error) console.log(error);
//leemos el archivo
  fs.readFileSync(file, "utf-8", (error, response) => {
    if (error) console.log(error);
    console.log(response);
  });
//actuaizamos el archivo
  fs.appendFile(file, "esta es una acualizacion", (error) => {
    if (error) console.log(error);
//volvemos a leer
    fs.readFile(file, "utf-8", (error, response) => {
      if (error) console.log(error);
      console.log(response);
    });
  });

//elimino el archivo
  fs.unlink(file, error => {
    if (error) console.log(error)
  })
});
