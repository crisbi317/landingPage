
import cartLogo from '../assets/cart4.svg'
import './CartWidget.css'

function CartWidget({cantidad}) {
  

  return (
    <>
      <p>
          <img src={cartLogo} className="logo" alt="Carrito logo" />{cantidad}</p>
             
             
    </>
  )
}

export default CartWidget
