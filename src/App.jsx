
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  {CartContextProv} from './context/CartContext'
import Header from './components/Header/Header'
import CartContainer from './components/CartContainer/CartContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import './App.css'
import "./Medias.css"

function App() {
  
  return (
    <div>
      <CartContextProv>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
      </CartContextProv>
    </div>
    
  )
}

export default App
