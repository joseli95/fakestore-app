import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import { CartProvider } from './provider/CartProvider.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Login from './pages/Login.jsx'
import Auth from './hoc/Auth.jsx'
import Protected from './pages/auth/Protected.jsx'
import Register from './pages/Register.jsx'

function App() {
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
              <Route path='/login' exact element={<Login />} />
              <Route path='/register' exact element={<Register />} />
            </Routes>

            <Routes>
              <Route
                path='/protected'
                exact
                element={
                  <Auth>
                    <Protected />
                  </Auth>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
