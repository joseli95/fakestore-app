import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import { CartProvider } from './provider/CartProvider.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

function App () {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <main className='min-h-screen flex flex-col'>
            <NavBar />

            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/cart' exact element={<Cart />} />
              <Route path='/detail/:id' exact element={<ProductDetail />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
