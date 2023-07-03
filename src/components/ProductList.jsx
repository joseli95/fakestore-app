import { useEffect, useState } from 'react'
import useApi from '../hooks/useAPI.js'
import ProductItem from './ProductItem.jsx'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { getProducts } = useApi()

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products)
        setFilteredProducts(products)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  const filterProducts = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    if (searchTerm === '') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      )
      setFilteredProducts(filtered)
    }
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input
            type='text'
            className='w-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Buscar...'
            onInput={filterProducts}
          />

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
            {
              filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            }
          </div>
        </>
      )}
    </>
  )
}

export default ProductList
