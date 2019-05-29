import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="title">Erased</h1>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/play_erased" className="nav-item">Play Erased</Link>
            <Link to="/canvas" className="nav-item">Start Drawing</Link>
        </div>
    )
}

export default Navbar