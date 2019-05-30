import React from "react"
import {faAnchor} from "@fortawesome/free-solid-svg-icons"
import { faReact, faGoogle, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faReact} size="2x" color="lightblue"/>
            <FontAwesomeIcon icon={faGoogle} size="2x" color="#FD5B78"/>
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#fefefe"/>
            <FontAwesomeIcon icon={faAnchor} size="2x" color="yellow"/>
        </div>
    )
}

export default Footer