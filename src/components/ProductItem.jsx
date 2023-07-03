import PropTypes from 'prop-types'

import { useCartContext } from '../provider/CartProvider.jsx'

const ProductItem = ({ product }) => {
  const { state: { cart }, dispatch } = useCartContext()

  return (
    <div className='flex flex-col border border-gray-300 shadow-sm rounded-xl p-4'>
      <img
        src={product.image}
        alt={product.title}
        className='h-28 object-cover self-center'
      />
      <h2 className='font-bold'>{product.title}</h2>
      <span>${product.price}</span>
      {
        cart.length === 0 || !cart.some((el) => el.id === product.id)
          ? (
            <button
              className='bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2'
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: product })
                alert('Producto añadido al carrito')
              }}
            >
              Add to cart
            </button>
            )
          : (
            <button
              className='text-red-600'
              onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}
            >
              Eliminar
            </button>
            )
      }
      <a href={`/detail/${product.id}`} className='bg-blue-500 hover:bg-blue-400 text-white rounded-md p-2 mt-2 text-center'>
        Detail
      </a>
    </div>
  )
}

export default ProductItem

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}
