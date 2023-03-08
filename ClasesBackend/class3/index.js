console.log("hola, este es el archivo proincipal");
//asi se exporta la clase Jugador (Es un molde para crear nuevos objetos)
const Jugador = require("./indexP")
//aca se instancia la clase
const messi = new Jugador("messi", "2", "psa");
const cristiano = new Jugador ("Cristiano", 180, "PSG")
messi.correr();
messi.presentarse();
messi.patear("izquierda");
messi.celebrar(3);
messi.obtenerSalario();

cristiano.presentarse();
cristiano.obtenerSalario();


