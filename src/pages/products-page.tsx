import { useContext } from "react"
import { Form } from "../components/form"
import { Errors } from "../components/errors"
import { Header } from "../components/header"
import { Loader } from "../components/loader"
import { Modal } from "../components/modalwindow"
import { Product } from "../components/Product"
import { ModalContext } from "../context/ModalContext"
import { useProducts } from "../hooks/products"
import { IProduct } from "../models"


export function ProductsPage() {
    const {loading, error, products, addProduct} = useProducts()

    const {modal, open, close} = useContext(ModalContext)
    
    const createHandler = (product: IProduct) => {
      close()
      addProduct(product)
    }
    
    return (
      <div className='wrapper'>
        <Header />
        <div className='products'>
          {loading && <Loader/>}
          {error && <Errors error={error} />}
          {products.map(product => <Product openModal={open} product={product} key={product.id}/>)}
        </div>
        {modal && <Modal title='Modal' close={close}><Form onCreate={createHandler}></Form></Modal>}
      </div>
    )
}