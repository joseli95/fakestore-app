import { useCartContext } from '../provider/CartProvider.jsx'
import PropTypes from 'prop-types'

const CartItem = ({ product }) => {
  const { dispatch } = useCartContext()

  return (
    <div className='flex border border-gray-300 shadow-sm rounded-xl p-4'>
      <img
        src={product.image}
        alt={product.title}
        className='h-28 object-cover self-center'
      />
      <h2 className='font-bold'>{product.title}</h2>
      <span>${product.price}</span>
      <button
        className='text-red-600'
        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}
      >Eliminar
      </button>
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  product: PropTypes.object.isRequired
}
