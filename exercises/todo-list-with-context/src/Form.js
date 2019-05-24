import React from "react"
import { withTodos } from "./TodoProvider";

class Form extends React.Component {
    constructor() {
        super() 
        this.state = {
            title: "",
            description: "",
            todos: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            title: this.state.title,
            description: this.state.description
        }

        this.props.postTodo(newTodo)

        this.setState({
            title: "",
            description: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="Todo Title..."
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    placeholder="Todo Description..."
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default withTodos(Form)