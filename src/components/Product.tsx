
import { stringify } from 'querystring';
import React, {createElement as e} from 'react'
import { json } from 'stream/consumers'
import {IProduct} from '../models'

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    return (
        e('div', {className: "product"}, [
            e('img', {src: props.product.image, alt: '#', key: 1}),
            e('h2', {className: 'product-title', key: 2}, props.product.title),
            e('p', {className: 'product-des', key: 3}, props.product.description)
        ])
    )
}