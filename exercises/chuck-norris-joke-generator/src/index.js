import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import JokeProvider from "./JokeProvider"
import App from "./App"

ReactDOM.render(
    <BrowserRouter>
        <JokeProvider>
            <App />
        </JokeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)

