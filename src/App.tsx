import React, {createElement as e, useEffect, useState} from 'react';
import {Product} from './components/Product'
import { products } from './components/data/products';
import {Header} from './components/header'
import axios from 'axios';
import { IProduct } from './models';

function App() {

  const [products, setProducts] = useState<IProduct[]>([])

  async function fetchProducts() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='products'>

        {products.map(product => <Product product={product} key={product.id}/>)}

        {/*Динамическое создание компонентов, синтаксис записи цикла в tsx*/}
      </div>
    </div>
  )
}

export default App;
