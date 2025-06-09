//crear una promesa que simula solucion de array de productos luego de un seg
const products = [
  {
    id: 1,
    title: "Remera",
    descripcion: "Remera linda",
    price: "200.5",
    img: "/vite.svg",
    stock:5,
    category:"remeras"
  },
  {
    id: 2,
    title: "Pantalon",
    descripcion: "Pantalon lindo",
    price: "300.5",
    img: "/vite.svg",
    stock:5,
    category:"pantalones"
  },
  {
    id: 3,
    title: "Campera",
    descripcion: "Campera linda",
    price: "400.5",
    img: "/vite.svg",
    stock:5,
    category:"camperas"
  },
  {
    id: 4,
    title: "Campera",
    descripcion: "Campera linda",
    price: "400.5",
    img: "/vite.svg",
    stock:5,
    category:"remeras"
  },
  {
    id: 5,
    title: "Campera",
    descripcion: "Campera linda",
    price: "400.5",
    img: "/vite.svg",
    stock:5,
    category:"camperas"
  },
  {
    id: 6,
    title: "Campera",
    descripcion: "Campera linda",
    price: "400.5",
    img: "/vite.svg",
    stock:5,
    category:"camperas"
  }
]
function getProducts() {
  return new Promise( (resolve, reject) => {  
    setTimeout( () => {
      resolve(products)
    }, 2000)
})
}
export default getProducts;