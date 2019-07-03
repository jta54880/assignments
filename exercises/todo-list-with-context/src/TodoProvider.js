import React, { Component } from 'react';
import axios from 'axios';

//First thing you do to create a new context/Global State
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()

        //Global State --> can be accessed anywhere in Application
        this.state = {
            todos: []
        }
    }

    getPexel = () => {
        axios.get("https://api.pexels.com/v1/search?query=planets&per_page=9&page=1", {headers: {"Authorization": "563492ad6f91700001000001bf17a39203544a5d9a476769585a0850"}}).then(response => {
            console.log(response.data)
        })
    }

    getTodos = () => {
        axios.get('https://api.vschool.io/jakeafuvai/todo').then(response => {
            this.setState( {todos: response.data} )
        })
    }

    postTodo = (todo) => {
        axios.post('https://api.vschool.io/jakeafuvai/todo', todo).then(response => {
            this.setState(prevState => {
                return { todos: [...prevState.todos, response.data] }
            })
        })
    }

    deleteTodos = (id) => {
        console.log("fired", id)
        axios.delete(`https://api.vschool.io/jakeafuvai/todo/${id}`).then(response => {
            this.setState(prevState => {
                const updatedTodos = prevState.todos.filter(todo => todo._id !== id)
                return { todos: updatedTodos }
            })
        })
    }

    putTodo = (id, updatedTodo) => {
        axios.put(`https://api.vschool.io/jakeafuvai/todo/${id}`, updatedTodo).then(response => {
            const filteredTodos = this.state.todos.filter(todo=>todo._id !== id)
            this.setState({todos: [...filteredTodos, response.data]})
        })
    }

    // this.setState(prevState => {
    //     const updatedTodos = prevState.todos.map(todo => {
    //         return todo._id === id ? todo = changedTodo : todo
    //     })
    //     return { todos: updatedTodos }
    // })

    render() {
        return (
            // Provider Stores all your global information
            // When you add a method to your provider, it must be added as a key: value pair. i.e. getTodos: this.getTodos
            <Provider value={{
                ...this.state,
                getTodos: this.getTodos,
                deleteTodos: this.deleteTodos,
                postTodo: this.postTodo,
                getPexel: this.getPexel,
                putTodo: this.putTodo
            }} >
                {/* In this case App is the child being referenced --> See index.js */}
                {this.props.children}
            </Provider>
        );
    }
}

export default TodoProvider;

export function withTodos(Comp){
    //Consumer makes the global information accessible
    return props => <Consumer>
                            {/* Value --> every thing in the value object on line 27 */}
                            {/* Props --> everything that is passed in as props to the component you are calling withTodos on, i.e. withTodos(App) */}
                        {value => <Comp {...props}{...value} />}
                    </Consumer>
}