class ProductManager {
  title = "";
  description = "";
  price;
  thumbnail = "";
  code;
  stock = "";
  id = 0;

  constructor(title, description, price, thumbnail, code, stock, id) {
    this.product = [];
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = id + 1;
  }

  addProduct (product) {
    if (
        !product.title,
        !product.description,
        !product.price,
        !product.thumbnail,
        !product.code,
        !product.stock,
        !product.id 
      ) {
        console.log("Completar todos los campos");
      } else {
        this.product.push(product);;
      }
    }
    getProducts() {
        return console.log(this.product);
    }

    getProductById(id){
    let idEncontrado = this.product.find(idp => {console.log(idp)
        return id == this.id
    })
    console.log(idEncontrado)
    console.log("hola");};
    
   
  }

const producto1 = new ProductManager();
const producto2 = new ProductManager("fideos", "kkkjk", 200, "./", 1, 200, 2);
const producto3 = new ProductManager("fideos", "kkkjk", 200, "./", 1, 200, 3);

producto2.addProduct(producto2);
producto2.getProducts();
producto1.getProductById(1);






