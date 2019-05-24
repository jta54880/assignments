import React from "react"
import Axios from "axios";
const { Consumer, Provider } = React.createContext()

class GlobalProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            hitList: []
        }
    }

    componentDidMount() {
        Axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
            this.setState({ hitList: response.data })
        })
    }

    render() {
        console.log(this.state.hitList)
        return (
            <Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default GlobalProvider

export const withProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)