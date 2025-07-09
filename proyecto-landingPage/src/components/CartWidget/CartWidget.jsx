import { useAppContext } from '../../Context/Context';
import cartLogo from '../../assets/cart4.svg'
import './CartWidget.css'

function CartWidget() {
  const { carrito } = useAppContext();

  return (
    <p onClick={() => console.log("ESTE ES TU CARRITO", carrito)}>
      <img src={cartLogo} className="logo" alt="Carrito logo" />
      <span>{carrito.reduce((acc,value) => acc += value.cantidad, 0)}</span></p>
                
    
  );
};

export default CartWidget;
