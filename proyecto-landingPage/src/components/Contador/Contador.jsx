
import { useState } from "react";
import './Contador.css';
function Contador({ cantidad, restarCantidad, sumarCantidad }) {
    return (
        <div className="contador">
            <button className="btn btn-secondary" onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button className="btn btn-secondary" onClick={sumarCantidad}>+</button>
        </div>
    );
/*function Contador() {
  const [cantidad, setCantidad] = useState(1);
  function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        };
    };
    
    function sumarCantidad() {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
        };
    };
  useEffect(() => {
    setCount(initial);
  }, [initial]);


  return (
    <div className="contador">
      <button onClick={restarCantidad}>-</button>
      <span>{cantidad}</span>
      <button onClick={sumarCantidad}>+</button>
      <button onClick={() => onAdd(cantidad)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );*/
}

export default Contador;
