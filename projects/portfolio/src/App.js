import React from "react"
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"
import Navbar from "./Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Projects from "./Projects"
import Resume from "./Resume"
import Footer from "./Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { withGlobalState } from "./DataProvider"
import "./App.css"

const App = (props) => {
    return (
        <div className="app-container">
                <button className="menu-btn">
                    <Fade delay={2000} duration={2000}>
                            <FontAwesomeIcon 
                                icon={faBars} 
                                color="#FD5B78" 
                                size="3x"
                                onClick={props.openMenu}
                            />
                    </Fade>
                </button>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
            </Switch>
            <Pulse>
                <Footer />
            </Pulse>
        </div>
    )
}

export default withGlobalState(App)