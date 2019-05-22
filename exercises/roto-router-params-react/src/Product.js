import React from "react"
import productList from "./products.json"

const Product = (props) => {
    const { _id } = props.match.params
    const product = productList.find(product => product._id === _id)
    const { name, price, description } = product

    return (
        <div className="item">
            <h1>{name}</h1>
            <h2>Price: ${price}</h2>
            <h4>Description: {description}</h4>
        </div>
    )
}

export default Product