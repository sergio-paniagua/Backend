//Aca creamos las clases y un metodo ``````
//diferenciar entre propiedades (variables) y metodos (funciones, algo q puede hacer)
// aca vemos un ejemplo de una propiedad y metodos
class Jugador {
    nombre = "";
    estatura = 2;
    equipo = "";
    celebraciones = [`gol`, `manos al cielo`, `gritar`];

    constructor(nombre, estatura, equipo) {
      this.nombre = nombre;
      this.estatura = estatura;
      this.equipo = equipo;
    }
  
    #salario= 12000 //variable privada
    presentarse() {
      console.log(`hola soy ${this.nombre}`);
    }
    correr() {
      console.log("corriendo por la cancha");
    }
    patear(pierna) {
      console.log(`ateando con la pierna ${pierna}`);
    }
    celebrar(celebracion) {
      console.log(this.celebraciones[celebracion-1]);
    }
  
    obtenerSalario(){
      const salarioNeto= this.#salario * 0.50;
      console.log (`${this.nombre} gana ${salarioNeto} euros`);
  
    }
  }
module.exports=Jugador;



