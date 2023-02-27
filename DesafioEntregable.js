class ProductManager {
  title = "";
  description = "";
  price;
  thumbnail = "";
  code;
  stock = "";
  id = 0;

  constructor(title, description, price, thumbnail, code, stock, id) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = id + 1;
  }

  Validar() {
    if (
      this.title ||
      this.description ||
      this.price ||
      this.thumbnail ||
      this.code ||
      this.stock ||
      this.id === undefined
    ) {
      console.log("Completar todos los campos");
    } else {
      console.log(`informacion del producto ${this.title}`);
    }
  }
}

const producto1 = new ProductManager();
const producto2 = new ProductManager("", "kkkjk", 200, "./", 1, 200, 2);
const producto3 = new ProductManager("fideos", "kkkjk", 200, "./", 1, 200, 3);

//Funcion para agregar productos
function addProduct(...producto) {
  arrayProducto = [];
  arrayProducto.push(producto);
  return producto;
}
//Funcion para mostrar los productos agregados
function getProducts() {
  return console.log(arrayProducto);
}

addProduct(producto1, producto2, producto3);
getProducts();



