import {Link} from 'react-router';
import { useAppContext } from '../../Context/Context';
import './item.css'


function Item(props) {
  const {id, title, descripcion, price, img} = props;
  const { agregarAlCarrito } = useAppContext();
    return (
  
      <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">$ {price}</p>
          <Link to={`/detalle/${id}`}>
            <button className="btn btn-primary">ver detalle</button>
          </Link>
          <button className="btn btn-primary" 
             onClick={() => agregarAlCarrito({ ...props, cantidad: 1 })}>
          Agregar al carrito</button>
        </div>
      </div>   
             

  );
}

export default Item;
