import React from "react"
import { withData } from "./DataProvider"

const DeleteComplete = props => {
    return (
        <button onClick={props.deleteAllComplete}>Delete All Completed</button>
    )
}

export default withData(DeleteComplete)