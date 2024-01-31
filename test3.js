class ProductManager{
        constructor(){
          this.products = []
        }

        static id = 0

        addProduct(title, descripcion, price, thumbnail, code, stock){
              ProductManager.id++
              this.products.push({title, descripcion, price, thumbnail, code, stock, id:ProductManager.id })

        }

        getProducts(){
            return this.products;
        }

        getProductById(id){
          if(!this.products.find((producto) => producto.id === id)){
            console.log("Not Found")
          } else{
            console.log("Exists")
          }
        }
}

 const productos = new ProductManager
 console.log(productos.getProducts())

 productos.addProduct('titulo1', 'descripcion1', 2000, "/path/to/image1.jpg", "A001", 9)

 productos.addProduct('titulo2', 'descripcion2', 2000, "/path/to/image2.jpg", "A002", 7)
 console.log(productos.getProducts())


 productos.getProductById(3)