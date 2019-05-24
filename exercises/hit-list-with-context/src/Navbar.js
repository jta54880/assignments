import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="the-don"></div>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/hit_list" className="nav-item">Hit List</Link>
        </div>
    )
}

export default Navbar