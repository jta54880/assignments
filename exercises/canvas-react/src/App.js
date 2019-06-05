import React from "react"
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import PlaySketched from "./PlaySketched.js"
import Canvas from "./Canvas.js"
import Footer from "./Footer.js"
import SavedSketches from "./SavedSketches.js"
import { Switch, Route } from "react-router-dom"
import "./App.css"

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/play_sketched" component={PlaySketched} />
                <Route path="/canvas" component={Canvas} />
                <Route path="/saved_sketches" component={SavedSketches} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App