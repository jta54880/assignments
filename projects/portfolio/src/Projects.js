import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="body">
            <Fade duration={3000}>
                <div className="projects-container">
                    <h1>projects...</h1>
                    <a href="https://github.com/jta54880/final-project"><h3>TIE: Full Stack Coach App</h3>
                    <div className="tie-img"></div>
                    </a>
                    <a href="http://sketched.surge.sh"><h3>Sketched: React SPA Web App</h3>
                    <div className="sketched-img"></div>
                    </a>
                    <a href="http://periodictable.surge.sh"><h3>Periodic Table React Web App</h3>
                    <div className="periodic-table-img"></div>
                    </a>
                </div>
            </Fade>
        </div>
    )
}

export default Projects