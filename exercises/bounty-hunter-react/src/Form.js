import React from "react"
import { withProvider } from "./GlobalProvider"

const Form = (props) => {
    return (
        <form className="form-container" onSubmit={props.handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={props.firstName}
                placeholder="bounty first name..."
                onChange={props.handleChange}
            />
            <br/>
            <input 
                type="text"
                name="lastName"
                value={props.lastName}
                placeholder="bounty last name..."
                onChange={props.handleChange}
            />
            <br/>
            <label> 
                <input
                    type="checkbox"
                    name="living"
                    checked={props.living}
                    onChange={props.handleChange} 
                /> Living?
            </label>
            <br/>
            <input 
                type="number"
                name="bounty"
                value={props.bounty}
                placeholder="bounty amount..."
                onChange={props.handleChange}
            />
            <br/>
            <label>
                <input 
                    type="radio"
                    name="type"
                    value="Sith"
                    checked={props.type === "Sith"}
                    onChange={props.handleChange}
                /> Sith
            </label>
            <br/>
            <label>
                <input 
                    type="radio"
                    name="type"
                    value="Jedi"
                    checked={props.type === "Jedi"}
                    onChange={props.handleChange}
                /> Jedi
            </label>
            <br/>
            <button>Submit Bounty</button>
        </form>
    )
}

export default withProvider(Form)