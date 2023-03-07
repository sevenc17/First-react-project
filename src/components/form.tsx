
import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { Errors } from "./errors";


const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 1,
        count: 4
    }
}
 
interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function Form({onCreate}: CreateProductProps){

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        setError('')

        if(value.trim().length === 0){
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    return (
        <form action="#" method="post" onSubmit={submitHandler}>
            <input 
                type="text" 
                className="form-input"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            {error && <Errors error={error} />}
            <button className="form-button" type="submit">Очистить форму</button>
        </form>
    )
}