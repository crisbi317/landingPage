import { Link } from 'react-router';
import { useAppContext } from '../../Context/Context';
import cartLogo from '../../assets/cart4.svg'
import './CartWidget.css'

function CartWidget() {
  const { carrito } = useAppContext();

  return (
    <p onClick={() => console.log("ESTE ES TU CARRITO", carrito)}>
     <Link to="/carrito"> <img src={cartLogo} className="logo" alt="Carrito logo" /> </Link >
     <span className="cantidadCarrito">
      {carrito.length === 0 ? "0" : carrito.reduce((acc, value) => acc += value.cantidad, 0)}
     </span>
    
     {// <span className="cantidadCarrito">{carrito.reduce((acc,value) => acc += value.cantidad, 0)}</span>
        }        </p>
    
  );
};

export default CartWidget;
