class ProductManager {
  constructor() {
    //Se define en el metodo constructor un array que contendra los productos
    //arranca vacio
    this.products = [];
  }

  id = 0

  //El metodo que agrega cada producto como un objeto
  addProduct(title, description, price, thumbnail, code, stock, id) {
    //hacemos una validacion
    if (!title, !description, !price, !thumbnail, !code, !stock, !id){
      console.log ("Debe completar todos los campos")
    }else {
      id++
      this.products.push({title, description, price, thumbnail, code, stock, id});
    }

  }
  getProducts() {
    if(this.products.length == 0){
      console.log ("No hay productos para mostrar")
    }else {
      console.log(this.products);
    }
  }

  getProductById(id) {
    if (!this.products.find((producto) => producto.id === id)){
      return console.log ("no encontrado")
    } else {
      return console.log("existe")
    }
  }
}

const productos = new ProductManager();
productos.getProducts();

