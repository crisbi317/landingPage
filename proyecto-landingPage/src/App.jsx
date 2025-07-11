
import { BrowserRouter , Routes, Route, Link } from 'react-router';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFound from './components/NotFound/NotFound';
import { ContextProvider } from './Context/Context';
import Carrito from './components/Carrito/Carrito';
import CheckOut from './components/CheckOut/CheckOut';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
      
      <ContextProvider>
       <Toaster />
       <BrowserRouter>
        <NavBar/>
        <Routes>
           <Route path="/" element={<ItemListContainer />} />
           <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetail />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<CheckOut />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </ContextProvider>
   
  );
};

export default App;
