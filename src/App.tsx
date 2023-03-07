
import {Route, Routes} from 'react-router-dom'
import { About } from './pages/About';
import { ProductsPage } from './pages/products-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductsPage />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App;
