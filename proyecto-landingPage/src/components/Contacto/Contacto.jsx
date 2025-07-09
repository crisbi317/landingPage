import { Link } from 'react-router';
import './Contacto.css';
function Contacto() {

    return (
        <div className='contacto-container'>
            <p>Escribi tu mensaje</p>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Tu consulta</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </form>
            <Link to="/"><button>Enviar</button></Link>
        </div>
    );
};

export default Contacto;