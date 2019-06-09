import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faAnchor } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className="footer-container">
            <FontAwesomeIcon icon={faGoogle} size="3x" color="red"/>
            <FontAwesomeIcon icon={faAnchor} size="3x" color="gold"/>
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="slategray"/>
        </div>
    )
}

export default Footer