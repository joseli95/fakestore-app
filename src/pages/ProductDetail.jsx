import { useParams } from 'react-router-dom'
import useApi from '../hooks/useAPI.js'
import { useEffect, useState } from 'react'
import { useCartContext } from '../provider/CartProvider.jsx'

export default function ProductDetail () {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const { getProduct } = useApi()
  const { dispatch } = useCartContext()

  useEffect(() => {
    getProduct(id).then((p) => {
      setProduct(p)
    }).catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div className='flex flex-col border border-gray-300 shadow-sm rounded-xl p-4'>
        <h1>Product detail</h1>
        <img
          src={product.image}
          alt={product.title}
          className='h-28 object-cover self-center'
        />
        <h2 className='font-bold'>{product.title}</h2>
        <p>{product.description}</p>
        <span>${product.price}</span>

        <button
          className='bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2'
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART', payload: product })
            alert('Producto añadido al carrito')
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  )
}
