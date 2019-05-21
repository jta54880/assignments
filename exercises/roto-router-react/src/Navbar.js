import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="link-container">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/services" className="nav-item">Services</Link>
            </div>
            <h1 className="title">Roto Router</h1>
        </div>
    )
}

export default Navbar