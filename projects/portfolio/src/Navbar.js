import React from "react"
import { Link } from "react-router-dom"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { withGlobalState } from "./DataProvider"

const Navbar = (props) => {
    const toggleMenu = props.showMenu ? "display-menu" : "no-display"
    return (
        <div className="navbar-container">
            <Fade delay={1000} duration={3000}>
                <p className="logo">jake</p>
            </Fade>
            <Fade right when={props.showMenu}>
                <div className={toggleMenu} style={{height: document.body.clientHeight}}>
                    <FontAwesomeIcon 
                        className="close-btn" 
                        icon={faWindowClose} 
                        size="3x" 
                        color="white" 
                        onClick={props.closeMenu}    
                    />
                    <Link className="menu-link" to="/">Home</Link>
                    <Link className="menu-link" to="/projects">Projects</Link>
                </div>
            </Fade>
        </div>
    )
}

export default withGlobalState(Navbar)