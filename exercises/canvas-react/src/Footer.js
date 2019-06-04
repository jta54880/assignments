import React from "react"
import { faAnchor } from "@fortawesome/free-solid-svg-icons"
import { faReact, faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} size="2x" color="lightblue"/></a>
            <a href="https://www.google.com/"><FontAwesomeIcon icon={faGoogle} size="2x" color="#FD5B78"/></a>
            <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#fefefe"/></a>
            <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} size="2x" color="limegreen"/></a>
            <a href="https://vschool.io/"><FontAwesomeIcon icon={faAnchor} size="2x" color="yellow"/></a>
        </div>
    )
}

export default Footer