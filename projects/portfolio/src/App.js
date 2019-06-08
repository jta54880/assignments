import React from "react"
import Fade from "react-reveal/Fade"
import Navbar from "./Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Projects from "./Projects"
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
            </Switch>
            <Footer />
        </div>
    )
}

export default withGlobalState(App)