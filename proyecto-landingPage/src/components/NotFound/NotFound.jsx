import { Link } from 'react-router';
import './NotFound.css';
function NotFound() {

    return (
        <div className='notfound-container'>
            <p>Te podes contactar telefonicamente a 22222-2222222</p>
            <Link to="/"><button>Volvé al inicio</button></Link>
        </div>
    );
};

export default NotFound;