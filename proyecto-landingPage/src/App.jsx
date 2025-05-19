
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'


function App() {
  

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
