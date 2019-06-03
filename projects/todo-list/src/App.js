import React from "react"
import FormInput from "./FormInput"
import DisplayTodos from "./DisplayTodos"
import DeleteComplete from "./DeleteComplete"
import "./App.css"

const App = () => {
    return (
        <div className="app-container">
            <FormInput />
            <DisplayTodos />
            <DeleteComplete />
        </div>
    )
}

export default App