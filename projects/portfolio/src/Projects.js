import React from "react"
import Fade from "react-reveal/Fade"

const Projects = () => {
    return (
        <div className="body">
            <Fade duration={3000}>
                <div className="projects-container">
                    <h1>projects...</h1>
                    <a href="https://github.com/jta54880/final-project"><h3>Full Stack Coach App</h3></a>
                    <a href="https://github.com/jta54880/assignments/tree/master/projects/periodic-table"><h3>React Sketched App</h3></a>
                    <a href="https://github.com/jta54880/assignments/tree/master/exercises/canvas-react"><h3>React Periodic Table App</h3></a>
                </div>
            </Fade>
        </div>
    )
}

export default Projects