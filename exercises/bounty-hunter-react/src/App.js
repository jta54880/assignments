import React from "react"
import { withProvider } from "./GlobalProvider"
import Form from "./Form"
import DisplayBountyList from "./DisplayBountyList"

const App = (props) => {
    console.log(props.firstName, props.lastName, props.living, props.bounty, props.type)
    return (
        <div className="app-container">
            <Form />
            <DisplayBountyList />
        </div>
    )
}

export default withProvider(App)