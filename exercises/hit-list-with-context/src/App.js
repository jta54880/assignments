import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import HitList from "./HitList"
import Target from "./Target"
import "./App.css"

const App = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hit_list" component={HitList} />
                <Route path="/hit_list/:name" component={Target} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App