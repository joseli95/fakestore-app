import { Link } from 'react-router-dom'
import { useCartContext } from '../provider/CartProvider.jsx'

const NavBar = () => {
  const { state: { cartCount } } = useCartContext()

  return (
    <nav className='h-20 w-full bg-black p-4 flex justify-between text-white items-center'>
      <Link to='/'>
        <span>FakeStore</span>
      </Link>
      <Link to='/cart'>
        <span>Cart ({cartCount})</span>
      </Link>

    </nav>
  )
}

export default NavBar
