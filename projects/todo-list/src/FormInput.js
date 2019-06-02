import React from "react"
import { withData } from "./DataProvider"

const FormInput = (props) => {
    return (
        <form className="form" onSubmit={props.handleSubmit}>
            <input 
                type="text"
                name="todo"
                value={props.todo}
                placeholder="Add Todo..."
                onChange={props.handleChange}
            />
            <button>Submit Todo</button>
        </form>
    )
}

export default withData(FormInput)