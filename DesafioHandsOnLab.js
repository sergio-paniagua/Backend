let item = {
  nombre: "",
  lugar: "",
  precio: "",
  capacidad: 50,
  fecha: "-",
};
arrayEvento = [];
//Funcion constructora de objeto
class TicketManager {
  item;
  id = 00001;

  CrearItem(Id, nombre, lugar, precio) {
    item = {
      Id: Id + 1,
      nombre: nombre,
      lugar: lugar,
      precio: precio * this.precioBaseDeGanancia,
      capacidad: 50,
      fecha: "-",
    };
    arrayEvento.push(item);
    return item;
  }
  //Se establece una variable privada que representa el incremento al precio del evento
  #precioBaseDeGanancia = 0.15;
}
 //Se genera el metodo que muestra los eventos guardados en el array
 function mostrarEvento(celebracion) {
  console.log(arrayEvento[celebracion - 1]);
}
const fiesta1 = new TicketManager();
const fiesta2 = new TicketManager();
const fiesta3 = new TicketManager();

fiesta1.CrearItem(1000, "max", "misiones", 1000);
fiesta2.CrearItem(2000, "sergio", "mendoza", 2000);
fiesta3.CrearItem(2005, "Agustin", "Mendoza", 3000)

mostrarEvento(3);
