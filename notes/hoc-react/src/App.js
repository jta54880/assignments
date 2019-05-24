import React from 'react'
import Card from "./Card"
import Menu from "./Menu"
import {withToggler} from "./Toggler"
import "./App.css"

const App = (props) => {
    const {on, toggle} = props
    const darkLight = on ? "dark" : "light"
    return (
        <div className={`${darkLight}-theme`}>
            <button onClick={toggle}>Theme</button>
            <Card />
            <Menu />
        </div>
    )
}

export default withToggler(App)