import React from "react"
import { faAnchor } from "@fortawesome/free-solid-svg-icons"
import { faReact, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} size="2x" color="lightblue"/></a>
            <a href="https://www.linkedin.com/in/jake-afuvai"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#fefefe"/></a>
            <a href="https://github.com/JakeAfuvai"><FontAwesomeIcon icon={faGithub} size="2x" color="limegreen"/></a>
            <a href="http://jta.surge.sh/"><FontAwesomeIcon icon={faAnchor} size="2x" color="yellow"/></a>
        </div>
    )
}

export default Footer