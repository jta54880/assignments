import React from "react"
import axios from "axios"
const { Consumer, Provider } = React.createContext()

class JokeProvider extends React.Component {
    constructor() {
        super();
        this.state = { 
            joke: {}
         }
    }

    getRandomJoke = () => {
        axios.get("http://api.icndb.com/jokes/random").then(response => {
            this.setState({ joke: response.data })
        })
    }

    render() { 
        return ( 
            <Provider value={{
                ...this.state,
                getRandomJoke: this.getRandomJoke
            }}>
                {this.props.children}
            </Provider> 
         )
    }
}
 
export default JokeProvider

export const withJoke = Comp => props => (
    <Consumer>
        {value => <Comp {...value} {...props} />}
    </Consumer>
)