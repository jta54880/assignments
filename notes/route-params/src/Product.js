import React from "react"
import list from "./products.json"

const Product = (props) => {
    const { _id } = props.match.params
    const product = list.find(product => product._id === _id)
    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <h3>{product.description}</h3>
        </div>
    )
}

export default Product