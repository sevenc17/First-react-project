
import { stringify } from 'querystring';
import React, { useState } from 'react'
import { json } from 'stream/consumers'
import {IProduct} from '../models'

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {

    const [details, setDetails] = useState(false)
    const btnBgcStyles = details ? 'show-info open-info' : 'show-info'


    return (
        <div className='product'>
            <img src={props.product.image} alt="#"></img>
            <h2 className='product-title'>{props.product.title}</h2>
            <button className={btnBgcStyles} onClick={() => setDetails(!details)}>{details ? 'Close info' : 'Show info'}</button>
            {details && <div>
                <p className='product-info'>{props.product.description}</p>
            </div>}
        </div>
    )
}

// function showInfo(event: any) {
//     for(let i of [...event.target.parentNode.childNodes]){
//         if(i.classList.contains('product-info')){
//             i.classList.toggle('active')
//         }
//     }
// }