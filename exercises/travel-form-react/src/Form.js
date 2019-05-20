import React from "react"
import FormDisplay from "./FormDisplay"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            lName: "",
            age: "",
            gender: "",
            destination: "",
            isChecked: false,
            dietaryRestrictions: [],
            passengers: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const passenger = {
            fName: this.state.fName,
            lName: this.state.lName,
            age: this.state.age,
            gender: this.state.gender,
            destination: this.state.destination,
            dietaryRestrictions: this.state.dietaryRestrictions
        }

        this.setState(prevState => {
            return {
                fName: "",
                lName: "",
                age: "",
                gender: "",
                destination: "",
                isChecked: false,
                dietaryRestrictions: [],
                passengers: [...prevState.passengers, passenger]
            }
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleCheckbox = (event) => {
        const {value, checked} = event.target
        checked ? 
            this.setState(prevState => {
                return {
                    isChecked: checked,
                    dietaryRestrictions: [...prevState.dietaryRestrictions, value]
                }
            })
            :
            this.setState(prevState => {
                return {
                    isChecked: checked,
                    dietaryRestrictions: prevState.dietaryRestrictions.filter(item => item !== value)
                }
            })
    }

    render() {
        const mappedPassengers = this.state.passengers.map((passenger, i) => (
            <FormDisplay
                key={i + passenger.fName}
                passenger={passenger}
            />
        ))
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="fName"
                        value={this.state.fName}
                        placeholder="First Name..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="lName"
                        value={this.state.lName}
                        placeholder="Last Name..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        placeholder="Age..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label> Female
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label> Male
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <select name="destination" onChange={this.handleChange}>
                        <option value="none selected">-Select Destination-</option>       
                        <option value="California">California</option>
                        <option value="New York">New York</option>
                        <option value="Florida">Florida</option>
                        <option value="Arizona">Arizona</option>
                    </select>
                    <br/>
                    <label> Peanut Allergy?
                        <input
                            type="checkbox"
                            name="isChecked"
                            value=" Peanut Allergy"
                            onChange={this.handleCheckbox}
                        />
                    </label>
                    <br/>
                    <label> Vegan?
                        <input
                            type="checkbox"
                            name="isChecked"
                            value=" Vegan"
                            onChange={this.handleCheckbox}
                        />
                    </label>
                    <br/>
                    <label> Lactose Free?
                        <input
                            type="checkbox"
                            name="isChecked"
                            value=" Lactose Free"
                            onChange={this.handleCheckbox}
                        />
                    </label>
                    <button>Submit</button>
                </form>
                <div>
                    <h1>Passenger Information</h1>
                    {mappedPassengers}
                </div>
            </>
        )
    }
}

export default Form