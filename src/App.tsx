import React, {createElement as e, useState} from 'react';
import {Product} from './components/Product'
import { products } from './components/data/products';
import {Header} from './components/header'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='products'>
        <Product product={products[0]} />
        <Product product={products[1]} />
        <Product product={products[2]} />
        <Product product={products[3]} />
      </div>
    </div>
  )
}

export default App;
