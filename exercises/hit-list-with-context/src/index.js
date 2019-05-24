import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import GlobalProvider from "./GlobalProvider"
import App from "./App"

ReactDOM.render(
    <BrowserRouter>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </BrowserRouter>,
    document.getElementById("root")
)