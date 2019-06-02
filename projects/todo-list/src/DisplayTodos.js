import React from "react"
import { withData } from "./DataProvider"
import Todo from "./Todo"

class DisplayTodos extends React.Component {
    componentDidMount = () => {
        this.props.getTodoList()
    }

    render() {
        const mappedTodos = this.props.todos.map(todo => 
            <Todo 
                key={todo._id}
                todo={todo}
            />    
        )
        return (
            <div className="todos-container">
                {mappedTodos}
            </div>
        )
    }
}

export default withData(DisplayTodos)