import ProductList from '../components/ProductList.jsx'

const Home = () => {
  return (
    <div className='flex-1 flex flex-col gap-4 p-4'>
      <h1>FakeStore</h1>
      <ProductList />
    </div>
  )
}

export default Home
