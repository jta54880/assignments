import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Jokes from "./Jokes"
import Footer from "./Footer"
import "./App.css"

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/jokes" component={Jokes} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App