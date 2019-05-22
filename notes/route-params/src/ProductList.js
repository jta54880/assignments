import React from "react"
import list from "./products.json"

import { Link } from "react-router-dom"

const Product = () => {
    const mappedProducts = list.map(product => <Link to={`/product_list/${product._id}`}>{product.name}</Link>)
    return (
    <div>
        <h1>Product</h1>
        <div>
            {mappedProducts}
        </div>
    </div>
    )
}

export default Product