import { Link } from 'react-router';
import raissaLogo from '../../assets/raissa.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
  
  return (
    
    <nav className='navbar bg-body-tertiary' data-bs-theme="light">
      <div className='container-fluid'>
        <a className='navbar-brand' href="#">
          <img src={raissaLogo} alt="Logo raissa" width="60" height="54" className="iconoLogo"/>
        </a>
      
        <ul className='nav justify-content-center'>
           
            <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Productos
                    </Link>
                </li>
                <li className="nav-item">
                  <Link to="/categoria/remeras" className="nav-link">Remeras</Link>
                </li>
                <li className="nav-item">
                  <Link to="/categoria/pantalones" className="nav-link">Pantalones</Link></li>
                <li className="nav-item">
                  <Link to="/categoria/camperas" className="nav-link">Camperas</Link></li>
               
            <li className="nav-item">
              <Link to="/contacto"  className="nav-link">Contacto</Link>
              </li>
        </ul>
        
          
            <CartWidget />
          
        
        </div>
      </nav>
      
    
  )
}

export default NavBar
