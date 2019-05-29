import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import DataProvider from "./DataProvider.js"
import App from "./App.js"

ReactDOM.render(
    <BrowserRouter>
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>, 
document.getElementById("root"))

// ReactDOM.render(<App />, document.getElementById("root"))