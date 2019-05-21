import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"

import { Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about_page" component={About} />
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </>
    )
}

export default App