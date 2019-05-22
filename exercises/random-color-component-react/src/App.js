import React from "react"
import Axios from "axios";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: []
        }
    }

    componentDidMount() {
        Axios.get("http://www.colr.org/json/color/random").then(response => {
            console.log(response.data.new_color)
            this.setState({color: response.data})
        })
    }

    render() {
        console.log(this.state.color)
        const { new_color } = this.state.color
        return (
            <div 
                className="container" 
                style={
                    {
                        background: `#${new_color}`,
                        height: "100vh",
                        width: "100vw"
                    }
                }
            >
            </div>
        )
    }
}

export default App