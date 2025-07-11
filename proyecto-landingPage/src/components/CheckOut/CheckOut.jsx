/*import { Link } from 'react-router';
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
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" required pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}' />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Tu nombre</label>
                    <input type="text" className="form-control" id="nombre" rows="3" required max={15} minLength={5}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Tu dirección</label>
                    <input type="text" className="form-control" id="direccion" rows="3" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Tu teléfono</label>
                    <input type="text" className="form-control" id="telefono" rows="3" required pattern='[0-9]'></input>
                </div>
                <div className="form-group">
                    <label htmlFor="cuit-cuil">CUIT/CUIL</label>
                    <input type="text" className="form-control" id="cuit-cuil" required placeholder="00-00000000-0" pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'/>
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

export default CheckOut;*/
import { useState } from 'react';
import { Link } from 'react-router';
import { useAppContext } from '../../Context/Context';
import './CheckOut.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
import { useNavigate } from 'react-router';

function CheckOut() {
    const { carrito, limpiarCarrito, cantidadTotal } = useAppContext();
    const ordenesCollection = collection(db, 'ordenes');
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        direccion: '',
        telefono: '',
        cuitCuil: '',
        comentarios: '',
        terminos: false
    });

     const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validación simple al enviar
  const validar = () => {
    const nuevosErrores = {};

    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      nuevosErrores.email = 'Por favor ingresa un email válido';
    }
    if (formData.nombre.length < 5 || formData.nombre.length > 15) {
      nuevosErrores.nombre = 'El nombre debe tener entre 5 y 15 caracteres';
    }
    if (formData.direccion.trim() === '') {
      nuevosErrores.direccion = 'La dirección es requerida';
    }
    if (!formData.telefono.match(/^[0-9]+$/)) {
      nuevosErrores.telefono = 'El teléfono debe contener sólo números';
    }
    if (formData.cuitCuil.trim() === '') {
      nuevosErrores.cuitCuil = 'El CUIT/CUIL es requerido';
    }
    if (!formData.terminos) {
      nuevosErrores.terminos = 'Debes aceptar los términos y condiciones';
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

    const compraFinalizada = () => {
        // Validar checkbox términos
        const terminos = document.getElementById("terminos");
        if (!terminos.checked) {
            alert("Debes aceptar los términos y condiciones");
            return;
        }

        const orden = {
            email: document.getElementById("email").value,  
            nombre: document.getElementById("nombre").value,
            direccion: document.getElementById("direccion").value,
            telefono: document.getElementById("telefono").value,
            cuitCuil: document.getElementById("cuit-cuil").value,
            comentarios: document.getElementById("comentarios").value,
            fecha: new Date(),
            productos: carrito.map((el) => ({
                id: el.id,
                title: el.title,
                price: el.price,
                cantidad: el.cantidad
            })),
            total: cantidadTotal()
        };

        addDoc(ordenesCollection, orden)
            .then(() => {   
                console.log("Orden guardada en la base de datos");
                alert("Orden guardada en la base de datos");
                limpiarCarrito();
                navigate("/"); 
            })
            .catch((err) => {
                console.error("Error al guardar la orden en la base de datos", err);
                alert("Error al guardar la orden en la base de datos");
            });
    };

   
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validar()) {
            compraFinalizada();
        } else {
            alert("Por favor corrige los errores en el formulario.");
        }
    };

    return (
        <div className='checkOut-container'>
            <p>Gracias por tu compra, ingresa tus datos para finalizar</p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" 
                    placeholder="name@example.com" value={formData.email} onChange={handleChange}  />
                    {errores.email && <p className="error">{errores.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Tu nombre</label>
                    <input type="text" className="form-control" id="nombre" value={formData.nombre} onChange={handleChange} />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Tu dirección</label>
                    <input type="text" className="form-control" id="direccion" value={formData.direccion} onChange={handleChange}/>
                    {errores.direccion && <p className="error">{errores.direccion}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Tu teléfono</label>
                    <input type="text" className="form-control" id="telefono" value={formData.telefono}
                    onChange={handleChange} /> {errores.telefono && <p className="error">{errores.telefono}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="cuit-cuil">CUIT/CUIL</label>
                    <input type="text" className="form-control" id="cuit-cuil" value={formData.cuitCuil}
            onChange={handleChange} /> {errores.cuitCuil && <p className="error">{errores.cuitCuil}</p>}
            </div>
                <div className="form-group">
                    <label htmlFor="comentarios">Comentarios</label>
                    <textarea className="form-control" id="comentarios" value={formData.comentarios}
            onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="terminos">
                        <input type="checkbox" id="terminos" checked={formData.terminos}
              onChange={handleChange} />{errores.terminos && <p className="error">{errores.terminos}</p>}
                        Acepto los términos y condiciones
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
            <p>Revisa que tus datos sean correctos antes de enviar</p>
        </div>
    );
};

export default CheckOut;
