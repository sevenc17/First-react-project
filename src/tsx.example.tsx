import React, {createElement as e, useState} from 'react';

import {Product} from './components/Product'

import { products } from './data/Products';

function App() {

  const [count, setCount] = useState(0)

  return (
    e('div', {className: 'container'}, [
      e('h1', {className: 'title', key: 1}, 'Test JSX'),
      e('div', {formMethod: 'post', key: 2},
        [e('button', {type: '', onClick: log1 , key: 3}, `click me!! ${count}`)])
    ])
  )

  function log1(): void {
    setCount(count + 1)
    console.log(count)
  }

}

export default App;