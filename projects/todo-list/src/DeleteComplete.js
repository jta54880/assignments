import React from "react"
import { withData } from "./DataProvider"

const DeleteComplete = props => {
    return (
        <>
        {props.todos.filter(todo => todo.completed).length > 0 &&
            <button 
                className="delete-completed-btn" 
                onClick={props.deleteAllComplete}
            >Delete All Completed
            </button>
        }
        </>
    )
}

export default withData(DeleteComplete)