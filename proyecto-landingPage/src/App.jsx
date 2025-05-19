import { useState } from 'react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <NavBar/>
      <ItemListContainer greetings="Bienvenido a mi proyecto"/>
    </div>
    </>
  )
}

export default App
