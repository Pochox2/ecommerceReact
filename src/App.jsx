
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import CartContainer from './components/CartContainer/CartContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import  {CartContextProv} from './context/CartContext'

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
    </BrowserRouter>
      </CartContextProv>
    </div>
    
  )
}

export default App
