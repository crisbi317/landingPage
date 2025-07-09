
import { BrowserRouter , Routes, Route, Link } from 'react-router';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFound from './components/NotFound/NotFound';
import { ContextProvider } from './Context/Context';

import Contacto from './components/Contacto/Contacto';

function App() {
    return (
      <ContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
           <Route path="/" element={<ItemListContainer />} />
           <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetail />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </ContextProvider>
   
  );
};

export default App;
