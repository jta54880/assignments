import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/jokes" className="nav-item">Jokes</Link>
        </div>
    ) 
}

export default Navbar