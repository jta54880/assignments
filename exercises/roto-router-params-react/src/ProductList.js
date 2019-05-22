import React from "react"
import list from "./products.json"
import { Link } from "react-router-dom"

const ProductList = () => {
    const products = list.map(product => <Link key={product._id} to={`/product_list/${product._id}`}>{product.name}</Link>)
    return (
        <div>
            {products}
        </div>
    )
}

export default ProductList