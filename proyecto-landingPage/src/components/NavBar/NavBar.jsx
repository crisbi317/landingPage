import raissaLogo from '../../assets/raissa.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
  
  return (
    <>
    <nav className='navbar bg-body-tertiary' data-bs-theme="light">
      <div className='container-fluid'>
        <a class="navbar-brand" href="#">
          <img src={raissaLogo} alt="Logo raissa" width="60" height="54" className="iconoLogo"/>
        </a>
      
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
        <a className="navbar-brand" src="#">
          
            <CartWidget cantidad={5}/>
          
        </a>
        </div>
      </nav>
      
    </>
  )
}

export default NavBar
