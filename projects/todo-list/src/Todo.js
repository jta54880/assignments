import React from "react"
import { withData } from "./DataProvider"

class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            newTodo: "",
            editMode: false
        }
    }

    handleEdit = () => {
        this.setState({ editMode: true })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSaveChanges = () => {
        const newTodo = { title: this.state.newTodo }
        this.props.putTodo(this.props.todo._id, newTodo)
        this.setState({ editMode: false, newTodo: "" })
    }

    ignoreChanges = () => {
        this.setState({ editMode: false })
    }

    render() {
        console.log(this.props.todo._id)
        return (
            <div className="todo-item">
                {this.state.editMode ? 
                    <>
                    <input 
                        type="text" 
                        name="newTodo"
                        value={this.state.newTodo}
                        placeholder={this.props.todo.title}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSaveChanges}>Save Changes</button> 
                    <button onClick={this.ignoreChanges}>Go Back</button>
                    </>
                    : 
                    <>
                    <p>{this.props.todo.title}</p>
                    <button onClick={this.handleEdit}>Edit</button>
                    </>
                }
                <button onClick={() => this.props.deleteTodo(this.props.todo._id)}>Delete</button>
            </div>
        )
    }
}

export default withData(Todo)