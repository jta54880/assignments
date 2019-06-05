import React from "react"
import { Link } from "react-router-dom"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { withData } from "./DataProvider"

const Navbar = (props) => {
    const menuLinksClass = props.showMenuLinks ? "show-menu-links" : "hide-menu-links" 
    return (
        <div className="navbar">
            <h1 className="title">Sketched</h1>
            <button className="menu-btn" onClick={props.showMenu}><FontAwesomeIcon icon={faBars} className="menu-btn" color="#FD5B78" size="2x"/></button>
            <div className={`menu-links ${menuLinksClass}`}>
                <button className="close-menu-btn" onClick={props.closeMenu}>X</button>
                <Link to="/" className="nav-item" onClick={props.closeMenu}>Home</Link>
                <Link to="/play_sketched" className="nav-item" onClick={props.closeMenu}>Play Sketched</Link>
                <Link to="/canvas" className="nav-item" onClick={props.closeMenu}>Start Sketching</Link>
                <Link to="/saved_sketches" className="nav-item" onClick={props.closeMenu}>Saved Sketches</Link>
            </div>
        </div>
    )
}

export default withData(Navbar)