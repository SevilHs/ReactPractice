import React from 'react'
import ProductCard from '../card';

const Cards = ({products,page}) => {
    const startValue=(page-1)*3
    return <div>
        {products.map(product=><ProductCard key={product.id} product={product}/>).slice(startValue,startValue+3)}
    </div>
}

export default Cards