import { useCartContext } from '../provider/CartProvider.jsx'
import CartItem from '../components/CartItem.jsx'

const Cart = () => {
  const { state: { cart, totalPrice } } = useCartContext()

  return (
    <div>
      <h1>Cart</h1>
      <div className='flex'>
        <div className=''>
          {cart.map((product) => (
            <div key={product.id}>
              <CartItem key={product.id} product={product} />
            </div>
          ))}
        </div>
        <div className='font-bold'>
          TOTAL: ${totalPrice}
        </div>
      </div>
    </div>
  )
}

export default Cart
