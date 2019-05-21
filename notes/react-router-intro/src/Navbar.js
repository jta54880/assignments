import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="header">
            <Link to="/about_page" className="nav-item" >About</Link>
            <Link to="/" className="nav-item">Home</Link>
        </div>
    )
}

export default Navbar