import React from "react"
import axios from "axios"
import uuid from "uuid/v4"
const { Consumer, Provider } = React.createContext()

class GlobalProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            living: true,
            bounty: "",
            type: "",
            bountyTargets: []
        }
    }

    componentDidMount = () => {
        this.getBountyList()
    }

    getBountyList = () => {
        axios.get("/bounty").then(response => {
            this.setState({ bountyTargets: response.data })
        })
    }

    postBounty = bounty => {
        axios.post("/bounty", bounty).then(response => {
            console.log(response.data)
            this.setState(prevState => ({ bountyTargets: [...prevState.bountyTargets, response.data]}))
        }) 
    }

    deleteBounty = id => {
        console.log(id)
        axios.delete(`/bounty/${id}`).then(response => {
            this.setState(prevState => {
                const updatedBountyList = prevState.bountyTargets.filter(target => 
                    target._id !== id    
                )
                return { bountyTargets: updatedBountyList}
            }) 
        })
    }
    
    handleChange = e => {
        const {name, value, type} = e.target
        type === "checkbox" ? 
            this.setState(prevState => ({ living: !prevState.living })) 
            : 
            this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bounty: this.state.bounty,
            type: this.state.type,
            _id: uuid()
        }

        // this.setState(prevState => ({ bountyTargets: [...prevState.bountyTargets, newBounty] }))

        this.postBounty(newBounty)

        this.setState({
            firstName: "",
            lastName: "",
            living: true,
            bounty: "",
            type: ""
        })

        // this.getBountyList()
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                deleteBounty: this.deleteBounty
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default GlobalProvider

export const withProvider = Comp => props => (
    <Consumer>
        {value => <Comp {...value} {...props} />}
    </Consumer>
)