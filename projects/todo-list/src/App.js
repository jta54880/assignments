import React from "react"
import FormInput from "./FormInput"
import DisplayTodos from "./DisplayTodos"

const App = () => {
    return (
        <div className="app-container">
            <FormInput />
            <DisplayTodos />
        </div>
    )
}

export default App