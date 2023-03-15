const fs = require ("fs")
const file = "./producto.json"
const ProductManager = require ("./DesafioEntregable1")


class ProductManager {
  title = "";
  description = "";
  price;
  thumbnail = "";
  code;
  stock = "";
  id = 0;

  constructor(title, description, price, thumbnail, code, stock, id) {
    //this.path = path;
    this.product = [];
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = id + 1;
  }

  addProduct(product) {
    if (
      (!product.title,
      !product.description,
      !product.price,
      !product.thumbnail,
      !product.code,
      !product.stock,
      !product.id)
    ) {
      console.log("Completar todos los campos");
    } else {
      //se incorpora el producto al array
      this.product.push(product);
      console.log(JSON.stringify(this.product));//[Circular*1] ???

    //Se genera el producto, ahora tengo que guardarlo en un archivo
    fs.promises.writeFile(file, JSON.stringify(this.product));
     
    }

  }

  getProducts() {
   const BDProduct= fs.promises.readFile(file, "utf-8")
   console.log(BDProduct);
    //return console.log(this.product);
  }

  getProductById(id) {
    this.product.find((idp) => {
      console.log(idp);
      if (this.id === id) {
        return console.log("no valido");
      } else console.log(id);
    });
  }

  updateProduct(product, id){
    //agrego el producto modificado
    fs.promises.appendFile (file, product, id)
    //y sobreescribo, para no perder los demas productos
    fs.promises.writeFile(file, JSON.stringify(product), JSON.stringify(id))
  }

  deleteProduct(product){
    fs.promises.unlink(JSON.stringify(product))

  }
}

const producto2 = new ProductManager("fideos", "kkkjk", 200, "./", 1, 200, 2);
const producto3 = new ProductManager("fideos", "kkkjk", 200, "./", 1, 200, 3);

producto2.addProduct(producto2);
//producto3.addProduct(producto3);
producto2.getProducts();


