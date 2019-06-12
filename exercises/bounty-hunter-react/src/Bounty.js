import React from "react"
import { withProvider } from "./GlobalProvider";

class Bounty extends React.Component {
    constructor() {
        super() 
        this.state = {
            firstName: "",
            lastName: "",
            living: false,
            type: "",
            bounty: "",
            showCard: true 
        }
    }

    componentDidMount = () => {
        this.setState({
            firstName: this.props.target.firstName,
            lastName: this.props.target.lastName,
            living: this.props.target.living,
            type: this.props.target.type,
            bounty: this.props.target.bounty,
            showCard: true
        })
    }

    showCard = () => {
        this.setState({ showCard: true })
    }

    hideCard = () => {
        this.setState({ showCard: false })
    }

    handleChange = e => {
        const { name, value, type } = e.target
        type === "checkbox" ? 
            this.setState(prevState => ({ living: !prevState.living })) 
            : 
            this.setState({ [name]: value })
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bounty: this.state.bounty,
            type: this.state.type,
        }

        // this.setState(prevState => ({ bountyTargets: [...prevState.bountyTargets, newBounty] }))

        this.props.putBounty(id, newBounty)

        // this.setState({
        //     firstName: "",
        //     lastName: "",
        //     living: true,
        //     bounty: "",
        //     type: ""
        // })

        this.showCard()
    }
    
    render() {
    const displayMode = this.state.showCard ? 
        <div className="bounty-card-display">
            <h1>{this.props.target.firstName} {this.props.target.lastName}</h1>
            <h2>Alive? {this.props.target.living ? "Yes" : "No"}</h2>
            <h2>Type: {this.props.target.type}</h2>
            <h2>Bounty Amount: ${this.props.target.bounty}</h2>
            <button onClick={() => this.props.deleteBounty(this.props.target._id)}>Remove Bounty</button>
            <button onClick={this.hideCard}>Edit Bounty</button>
        </div>
        :
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e, this.props.target._id)}>
            <input 
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="bounty first name..."
                onChange={this.handleChange}
            />
            <br/>
            <input 
                type="text"
                name="lastName"
                value={this.state.lastName}
                placeholder="bounty last name..."
                onChange={this.handleChange}
            />
            <br/>
            <label> 
                <input
                    type="checkbox"
                    name="living"
                    checked={this.state.living}
                    onChange={this.handleChange} 
                /> Living?
            </label>
            <br/>
            <input 
                type="number"
                name="bounty"
                value={this.state.bounty}
                placeholder="bounty amount..."
                onChange={this.handleChange}
            />
            <br/>
            <label>
                <input 
                    type="radio"
                    name="type"
                    value="Sith"
                    checked={this.state.type === "Sith"}
                    onChange={this.handleChange}
                /> Sith
            </label>
            <br/>
            <label>
                <input 
                    type="radio"
                    name="type"
                    value="Jedi"
                    checked={this.state.type === "Jedi"}
                    onChange={this.handleChange}
                /> Jedi
            </label>
            <br/>
            <button>Update Edits</button>
        </form>
    return (
        <div className="bounty-card-container">
            {displayMode}
        </div>
    )
    }
}

export default withProvider(Bounty)