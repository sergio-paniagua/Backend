
//const http = require ("http")
//Vamos a usar los metodos del modulo nativo de HTTP:

//Metodo que recibe una callbac con el request y el response
//const server = http.createServer((req, res) =>{
//res.end("hola a todos coderbackedns")
//} )

//Escuchamos un evento q se ve en un puerto especifico(ejemplo 8080, 3000)
//server.listen(3000, ()=>{
 //   console.log("Server running a port 3000")
//});
//-----------------//
//PROYECTO CON EXPRESS
const express = require("express");
//imortamos app,  que es una funcion declarada en express
const app = express();
app.use(express.urlencoded({extended:true}))

const port = 8080

app.get("/saludo", (req, res) =>{
    res.json({massage: "Hola a todos desde ExpressJs"})
})

app.get("/bienvenida", (req, res)=>{
    res.send(`<h1 style=color:blue>"Bienvenidos a todos"</h1>`)
})

app.get("/usuario", (req, res)=>{
   const user={
    nombre:"Sergio",
    apellido:"Paniagua",
    edad: 30,
    email: "sergiodpaniagua@gmail.com"
}
    res.json({message: user})
})

app.get("/search/:id/coment/:idComent", (req, res) =>{
    const {id, idComent} = req.params

    res.json({message: `${id} ${idComent}`})
})

const usuarios = [
    {id: "1", nombre: "sergio", apellido: "paniagua", genero: "M"},
    {id: "1", nombre: "maria", apellido: "perez", genero: "F"},
    {id: "1", nombre: "juan", apellido: "pereira", genero: "M"}
]

app.get("/", (req, res) =>{
    let genero = req.query.genero;
    if(!genero || (genero!=="M"&&genero!=="F")) return res.send ({usuarios})
    let usuriosFiltrados = usuarios.filter(usuario=> usuario.genero===genero)
    return res.send({usuriosFiltrados})
})


app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})

