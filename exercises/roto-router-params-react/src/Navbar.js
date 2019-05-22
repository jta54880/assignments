import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/product_list" className="nav-item">Products</Link>
        </div>
    )
}

export default Navbar