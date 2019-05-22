import React from "react"
import productList from "./products.json"
import { Link } from "react-router-dom"

const ProductList = () => {
    const products = productList.map(product => <Link key={product._id} to={`/product_list/${product._id}`} className="nav-item">{product.name}</Link>)
    return (
        <div className="body products">
            {products}
        </div>
    )
}

export default ProductList