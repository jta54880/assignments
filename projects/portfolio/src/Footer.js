import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAnchor } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className="footer-container">
            <a href="https://github.com/JakeAfuvai"><FontAwesomeIcon id="git" icon={faGithub} size="3x" color="red"/></a>
            <a href="http://jta.surge.sh"><FontAwesomeIcon id="anchor" icon={faAnchor} size="3x" color="gold"/></a>
            <a href="https://linkedin.com/in/jake-afuvai"><FontAwesomeIcon id="linkedin" icon={faLinkedin} size="3x" color="slategray"/></a>
        </div>
    )
}

export default Footer