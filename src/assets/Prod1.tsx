import React, {useState} from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

export function ProductFunctions({ product }: ProductProps) {
    const [details, setDetails] = useState(false)
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">Price: {product.price}</p>
            <button
                className={['border py-2 px-4', details ? 'bg-red-300' : 'bg-blue-400'].join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide detales' : 'Show detales' }
            </button>
            {details && <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
                <p>{product.description}</p>
            </div>
            }
        </div>
    )
}