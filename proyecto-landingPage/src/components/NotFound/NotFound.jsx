import { Link } from 'react-router';
import './NotFound.css';
function NotFound() {

    return (
        <div className='notfound-container'>
            <p>Te confundiste de ruta</p>
            <Link to="/"><button>Volvé al inicio</button></Link>
        </div>
    );
};

export default NotFound;