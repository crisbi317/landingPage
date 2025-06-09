import {Link} from 'react-router';
import './item.css'


function Item(props) {
  const {id, title, descripcion, price, img} = props;
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
          <button className="btn btn-primary" onClick={()=> console.log("vas a agregar al carrito a", title)}>Agregar al carrito</button>
        </div>
      </div>   
             

  );
}

export default Item;
