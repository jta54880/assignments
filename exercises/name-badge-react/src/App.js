import React from "react"
import Form from "./Form"
import Badge from "./Badge"
import "./styles.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            person: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                description: ""
            },
            people: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            description: this.state.description
        }

        this.setState(prevState => {
            return {
                people: [...prevState.people, person]  
            } 
        }, () => {
            this.clearForms() 
        })
    }

    clearForms = () => {
        document.getElementById("form").reset()
    }

    render() {
        console.log(this.state.people)
        const badges = this.state.people.map((person, i) => (
            <Badge
                key={i+person.firstName}
                person={person}
                i={i}
            />
        ))
        return (
            <div className="container">
                <Form 
                    person={this.state.person}
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                />
                {badges}
            </div>
        )
    }
}

export default App