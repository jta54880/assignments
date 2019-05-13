import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import "./app.css"

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default App