import React from "react"
import {withToggler} from "./Toggler"

const Card = (props) => {
    const {on, toggle} = props
    return (
        <div>
            <h3>My sweet example</h3>
            <p>My sweet description</p>
            <button onClick={toggle}>{on ? "Unstar" : "Star"}</button>
        </div>
    )
}

export default withToggler(Card)