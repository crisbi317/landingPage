import raissaLogo from '../assets/raissa.png'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
  
  return (
    <>
    <nav className='d-flex justify-content-between container'>
        <div className="contIconLogo">
          <a href="#">
              <img src={raissaLogo} alt="Logo raissa" className="iconoLogo"/></a>
        </div>
        <ul className="nav justify-content-center">
           <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Contacto</a>
            </li>
        </ul>
        <div className="contCartWidget">
          
            <CartWidget cantidad={5}/>
          
        </div>
      </nav>
      
    </>
  )
}

export default NavBar
