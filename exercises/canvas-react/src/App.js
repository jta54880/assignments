import React from "react"
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import PlayErased from "./PlayErased.js"
import Canvas from "./Canvas.js"
import Footer from "./Footer.js"
import { Switch, Route } from "react-router-dom"
import "./App.css"

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/play_erased" component={PlayErased} />
                <Route path="/canvas" component={Canvas} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App