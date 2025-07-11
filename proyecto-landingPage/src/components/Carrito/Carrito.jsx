import { Link } from 'react-router';
import './Carrito.css';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';

import { useAppContext } from '../../Context/Context';

function Carrito() {

const [loading, setLoading] = useState(false);
const { carrito, limpiarCarrito, cantidadTotal , eliminarDelCarrito} = useAppContext();

  

useEffect(() => {
    setLoading(true); 
    setTimeout(() => {
        setLoading(false);
    }, 1000);
}, [carrito]);

    return (
      <div className="item-list-container">
      
      {
        
       loading ? <Loader /> :
            carrito.length > 0 ?
            <div className="carrito-container">
                <h2>Carrito de compras</h2>
                <div className="carrito-items">
                    {
                        carrito.map(elem =>
                            <div key={elem.id} className="carrito-item">
                                <img src={elem.img} alt={elem.title} width="100" height="100" />
                                <h3>{elem.title}</h3>
                                <p>Precio: ${elem.price}</p>
                                <p>Cantidad: {elem.cantidad}</p>
                                <button onClick={() => eliminarDelCarrito(elem.id)} className="btn btn-danger">Eliminar</button>
                            </div>
                        )
                    }
                <p className="total">Total: ${cantidadTotal()}</p>
                </div>
            <div className="carrito-actions">
                <button onClick={limpiarCarrito} className="btn btn-danger">Vaciar carrito</button>
                <Link to="/checkout"><button className="btn btn-success">Finalizar compra</button></Link>
            </div>
            </div>
            :
            // Si el carrito está vacío
            <div className="carrito-container">
                <h2>Tu carrito está vacío</h2>
                <Link to="/"><button className="btn btn-primary">Volver a la tienda</button></Link>
            </div>  
      }
      
    </div>   
    );
};

export default Carrito;