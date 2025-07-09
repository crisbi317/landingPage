//crear una promesa que simula solucion de array de productos luego de 3 seg
const products = [
  {
    id:"1",
    title: "Camisa casual",
    descripcion: "Camisa casual blanca y bordada",
    price: 200.5,
    img: "https://tequierofashion.com/cdn/shop/products/S8628c7f56d304f4992f7df05613c0447n_360x.jpg?v=1690221387",
    stock:5,
    category:"remeras"
  },
  {
    id:"2",
    title: "Pantalon",
    descripcion: "Pantalon de lino",
    price: 300.5,
    img: "https://tequierofashion.com/cdn/shop/files/S2f196ddc60e744f5b1feb7deb70ea482K_360x.webp?v=1722531647",
    stock:15,
    category:"pantalones"
  },
  {
    id:"3",
    title: "Chaqueta",
    descripcion: "Chaqueta de cuero ecologico",
    price: 400.5,
    img: "https://tequierofashion.com/cdn/shop/products/product-image-533140453_360x.jpg?v=1571720304",
    stock:5,
    category:"camperas"
  },
  {
    id:"4",
    title: "Blusa",
    descripcion: "Blusa tejida azul",
    price: 400.5,
    img: "https://tequierofashion.com/cdn/shop/products/HTB1XsykdQxz61VjSZFtq6yDSVXaU_31e542e7-1697-4f2f-8114-82d11769cb1a_360x.jpg?v=1571720349",
    stock:5,
    category:"remeras"
  },
  {
    id:"5",
    title: "Tapado",
    descripcion: "Tapado verde",
    price: 400.5,
    img: "https://tequierofashion.com/cdn/shop/products/product-image-834103388_360x.jpg?v=1713559412",
    stock:5,
    category:"camperas"
  },
  {
    id:"6",
    title: "Campera",
    descripcion: "Campera linda",
    price: 400.5,
    img: "https://tequierofashion.com/cdn/shop/products/product-image-535117626_360x.jpg?v=1571720317",
    stock:5,
    category:"camperas"
  }
]
function getProducts() {
 /* return new Promise( (resolve, reject) => {  
    setTimeout( () => {
      resolve(products)
    }, 3000)
})*/
return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulación: si products no está definido, se rechaza la promesa
      if (typeof products !== 'undefined') {
        resolve(products);
      } else {
        reject(new Error('No se pudieron cargar los productos'));
      }
    }, 2000);
  });
  }
export default getProducts;
