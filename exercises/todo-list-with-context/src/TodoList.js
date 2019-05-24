import React, { Component } from 'react';
// Import withTodos, this gives us our consumer, via a Higher order component called withTodos
import {withTodos} from './TodoProvider';
import Todo from './Todo';

class TodoList extends Component {
    componentDidMount (){
        this.props.getTodos()
    }
    
    render() {
         // this.props holds all of our Global state and any props specific to this component
        console.log(this.props)
        
        const mappedTodos = this.props.todos.map((todo)=> <Todo key={todo._id} title={todo.title} description={todo.description} id={todo._id} />)
        return (
            <div>
                {mappedTodos} 
            </div>
        );
    }
}

// then we pass our TodoList component into the withTodos Functional Component as the argument
export default withTodos(TodoList);