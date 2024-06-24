import React from 'react'
import { ProductFunctions } from './assets/Prod1'
import { products } from './data/products'

function App() {

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {products.map(product => <ProductFunctions product={product} key={product.id} />)}
            {/*<ProductFunctions product={products[0]} />
            <ProductFunctions product={products[1]} />*/}
        </div>
    )
}
export default App
