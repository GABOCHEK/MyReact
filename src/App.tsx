import React, {useEffect, useState} from 'react'
import { ProductFunctions } from './assets/Prod1'
//import { products } from './data/products'
import axios from 'axios'
import { IProduct } from './models'

function App() {

    const [products, setProducts] = useState<IProduct[]>([])
    async function fetchProducts() {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
        setProducts(response.data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {products.map(product => <ProductFunctions product={product} key={product.id} />)}
            {/*<ProductFunctions product={products[0]} />
            <ProductFunctions product={products[1]} />*/}
        </div>
    )
}
export default App
