
import {Product} from './components/Product'
import {Header} from './components/header'
import { useProducts } from './hooks/products'
import {Errors} from './components/errors'
import { Loader } from './components/loader'

function App() {
  
  const {loading, error, products} = useProducts()

  return (
    <div className='wrapper'>
      <Header />
      <div className='products'>
        {loading && <Loader/>}
        {error && <Errors error={error} />}
        {products.map(product => <Product product={product} key={product.id}/>)}

        {/*Динамическое создание компонентов, синтаксис записи цикла в tsx*/}
      </div>
    </div>
  )
}

export default App;
