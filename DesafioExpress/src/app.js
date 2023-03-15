const fs = require("fs");
const { Blob } = require("buffer");

//PROYECTO CON EXPRESS
const express = require("express");
//imortamos app,  que es una funcion declarada en express
const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.get("/saludo", (req, res) => {
  res.json({ massage: "Hola a todos desde ExpressJs" });
});

app.get("/products", (req, res) =>  {
   const data = fs.readFileSync("./file/products.json", "utf-8");
   console.log(data);
   const dataS = JSON.parse(data)
  res.send({productos : dataS});
});

const usuarios = [
  {id: "1", nombre: "sergio", apellido: "paniagua", genero: "M"},
  {id: "1", nombre: "maria", apellido: "perez", genero: "F"},
  {id: "1", nombre: "juan", apellido: "pereira", genero: "M"}
]

app.get("/", (req, res) =>{
  let genero = req.query.genero;
  if(!genero || (genero!=="M"&&genero!=="F")) return res.send ({usuarios})
  let usuriosFiltrados = usuarios.filter(usuario=> usuario.genero===genero)
  console.log(usuriosFiltrados)
  return res.send({usuriosFiltrados})
})

app.get("/products/:id", (req, res) =>  {
  const data = fs.readFileSync("./file/products.json", "utf-8");
  const dataS = JSON.parse(data)
  let id = req.params.id;
  let productosFiltrados = dataS.filter(dataS=> dataS.id===id)
  console.log(dataS);

  return res.send(productosFiltrados)
});


//param

//Ver lo de las query
app.get("/", (req, res) => {
  let genero = req.query.limit;
  if (!limit) return res.send({ products });
  let productosFiltrados = usuarios.filter(
    (productos) => productos.limit === limit
  );
  return res.send({ productosFiltrados });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
