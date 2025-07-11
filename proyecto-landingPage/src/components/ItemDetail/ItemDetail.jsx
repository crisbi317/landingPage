import {Link, useParams} from 'react-router';
import './ItemDetail.css';
import {useEffect, useState} from 'react';
import getAllProducts from "../../services/getAllProducts";
import Loader from '../Loader/Loader';  
import Contador from '../Contador/Contador';
import {useAppContext} from '../../Context/Context';


function ItemDetail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    const { agregarAlCarrito } = useAppContext();

    const [cantidad, setCantidad] = useState(1);

    function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        };
    };

    function sumarCantidad() {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
        };
    };

    function agregarCantidadAlCarrito() {
        agregarAlCarrito({ id: producto.id, price: producto.price, title: producto.title, cantidad });
        setCantidad(1);
    };

useEffect(() => {
    getAllProducts()
      .then((productos) => {
        const product = productos.find((p) => p.id === id);
        if (product) {
          setProducto(product);
        } else {
          alert("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error cargando productos");
      })
      .finally(() => setLoading(false));
  }, [id]);


  console.log(producto);
    return (
        loading ? <Loader /> :
            <div className="card">
                <div className="card-image-container">
                   <img src={producto.img} className="card-image" width="150" height="150" alt="product img" />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{producto.title}</h3>
                    <p className="card-description">{producto.descripcion}</p>
                    <p className="card-description">{producto.stock} unidades en stock</p>
                    <div>
                        <p className="card-price">$ {producto.price}</p>
                    </div>
                    
                    <Link to={`/`}>
                        <button className="card-button">Volver al inicio</button>
                    </Link>
                    <Contador cantidad={cantidad} sumarCantidad={sumarCantidad} restarCantidad={restarCantidad} />
                    <button className="card-button" onClick={agregarCantidadAlCarrito}>Agregar al carrito</button>
                </div>
            </div>
    );
};

export default ItemDetail;