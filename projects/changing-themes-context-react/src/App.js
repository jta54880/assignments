import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import "./App.css"
import { withTheme } from "./ThemeProvider"

const App = (props) => {
    const { isDark, theme, toggle, themeSelect } = props
    const color = 
        isDark ? "dark" : "light"
    return (
        <div className={`main-container ${color}-theme`}>
            <Navbar isDark={isDark} />
            <Main isDark={isDark} theme={theme} toggle={toggle} themeSelect={themeSelect} />
            <Footer isDark={isDark} />
        </div>
    )
}

export default withTheme(App)