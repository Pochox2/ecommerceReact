
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
      <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
      {/* <Route path='/detalle/ropa' element={<ItemListContainer />}/> */}
      {/* <Route path='/cart' element={<CartContainer/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
