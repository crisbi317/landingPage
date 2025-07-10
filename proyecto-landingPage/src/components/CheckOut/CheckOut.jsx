import { Link } from 'react-router';
import { useAppContext } from '../../Context/Context';
import './CheckOut.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
function CheckOut() {
    const { carrito, limpiarCarrito, cantidadTotal } = useAppContext();
    const ordenesCollection = collection(db, 'ordenes');

    const compraFinalizada = () => {
        alert("Compra finalizada con éxito");
        console.log("Compra finalizada");

        const orden = {
            email: document.getElementById("email").value,  
            nombre: document.getElementById("nombre").value,
            direccion: document.getElementById("direccion").value,
            telefono: document.getElementById("telefono").value,
            cuitCuil: document.getElementById("cuit-cuil").value,
            comentarios: document.getElementById("comentarios").value,
            fecha: new Date(),
            productos: carrito.map((el) => {
                return {
                    id: el.id,
                    title: el.title,
                    price: el.price,
                    cantidad: el.cantidad
                };
            }),
            total: cantidadTotal()
        };

        addDoc(ordenesCollection, orden)
            .then(() => {   
                console.log("Orden guardada en la base de datos");
                alert("Orden guardada en la base de datos");
            })
            .catch((err) => {
                console.error("Error al guardar la orden en la base de datos", err);
                alert("Error al guardar la orden en la base de datos");
            });
        limpiarCarrito();
        };
    return (
        <div className='checkOut-container'>
            <p>Gracias por tu compra, ingresa tus datos para finalizar</p>
            <form action="">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Tu nombre</label>
                    <input type="text" className="form-control" id="nombre" rows="3"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Tu dirección</label>
                    <input type="text" className="form-control" id="direccion" rows="3"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Tu teléfono</label>
                    <input type="text" className="form-control" id="telefono" rows="3"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="cuit-cuil">CUIT/CUIL</label>
                    <input type="text" className="form-control" id="cuit-cuil" placeholder="00-00000000-0" />
                </div>
                <div className="form-group">
                    <label htmlFor="comentarios">Comentarios</label>
                    <textarea className="form-control" id="comentarios" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="terminos">
                        <input type="checkbox" id="terminos" />
                        Acepto los términos y condiciones
                    </label>
                </div>
            </form>
            <p>Revisa que tus datos sean correctos antes de enviar</p>
            <Link to="/"><button onClick={compraFinalizada}>Enviar</button></Link>
        </div>
    );
};

export default CheckOut;