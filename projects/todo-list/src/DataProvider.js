import React from "react"
import axios from "axios"
const { Consumer, Provider } = React.createContext()

class DataProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: "",
            todos: []
        }
    }

    getTodoList = () => {
        axios.get('https://api.vschool.io/jakeafuvai/todo').then(response => {
            this.setState({ todos: response.data })
        })
    }

    postTodo = (newTodo) => {
        axios.post('https://api.vschool.io/jakeafuvai/todo', newTodo).then(response => {
            this.setState(prevState => {
                return { todos: [...prevState.todos, response.data]}
            })
        })
    }

    putTodo = (id, newTodo) => {
        axios.put(`https://api.vschool.io/jakeafuvai/todo/${id}`, newTodo).then(response => {
            this.setState(prevState => {
                const index = prevState.todos.findIndex(todo => todo._id === id)
                prevState.todos[index].title = response.data.title
                return { todos: prevState.todos }
            })
        })
    }

    putCompleted = (id, complete) => {
        axios.put(`https://api.vschool.io/jakeafuvai/todo/${id}`, complete).then(response => {
            this.setState(prevState => {
                const updatedTodos = prevState.todos.map(todo => {
                    return todo._id === id ? todo.completed = response.data : todo
                })
                return { todos: updatedTodos }
            })
        })
    }

    deleteTodo = (id) => {
        console.log("fired", id)
        axios.delete(`https://api.vschool.io/jakeafuvai/todo/${id}`).then(response => {
            this.setState(prevState => {
                const updatedTodos = prevState.todos.filter(todo => todo._id !== id)
                return { todos: updatedTodos }
            })
        })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newTodo = {
            title: this.state.todo
        }
        this.postTodo(newTodo)
        this.setState({ todo: "" })
    }

    deleteAllComplete = () => {
        const completedTodos = this.state.todos.filter(todo => todo.completed)
        completedTodos.forEach(todo => {
            axios.delete(`https://api.vschool.io/jakeafuvai/todo/${todo._id}`).then(response => {
                this.setState(prevState => {
                    const updatedTodos = prevState.todos.filter(todo => !todo.completed)
                    return { todos: updatedTodos }
                })
            })
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                getTodoList: this.getTodoList,
                putTodo: this.putTodo,
                putCompleted: this.putCompleted,
                deleteTodo: this.deleteTodo,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                deleteAllComplete: this.deleteAllComplete
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default DataProvider
export const withData = Comp => props => (
    <Consumer>
        {value => <Comp {...value} {...props}/>}
    </Consumer>
)