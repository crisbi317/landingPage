import { createContext, useContext, useState } from "react";

// 1. app que voy a utilizar
const AppContext = createContext();

// 5. exporto el hook para poder usar el contexto en cualquier componente
export const useAppContext = () => useContext(AppContext);

// 2. crea el proveedor del contexto luego agrega en app.jsx el ContextProvider y envuelve el contenido
export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        
       if (carrito.some(el => el.id === producto.id)) {
            const nuevoCarrito = carrito.map(element => {
                if(element.id === producto.id){
                    
                    return {
                        ...element,
                        cantidad: element.cantidad + producto.cantidad,
                    };
                } else {
                    return element;
                };
            });
            setCarrito(nuevoCarrito);
            console.log("Producto agregado al carrito:", producto);
        } else {
            setCarrito([...carrito, producto]);
            console.log("Producto agregado al carrito:", producto);
        };
          
    };

    const limpiarCarrito = () => {
        setCarrito([]); 
        console.log("Carrito limpiado");
    }   

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(element => element.id !== id);  
        setCarrito(nuevoCarrito);
        console.log("Producto eliminado del carrito:", id);
    }

    const cantidadTotal = () => {
        return carrito.reduce((acc, value) => acc += value.cantidad * value.price, 0);    
    }
    

    // 3. agregar props
    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito, limpiarCarrito, cantidadTotal, eliminarDelCarrito  }}>
            {props.children}
        </AppContext.Provider>
    );
};