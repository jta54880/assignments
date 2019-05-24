import React from 'react';
import { withTodos } from "./TodoProvider"

const Todo = (props) => {
    console.log(props.description)
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <button>Edit</button>
            <button onClick={() => props.deleteTodos(props.id)}>Remove</button>
        </div>
    );
};

export default withTodos(Todo)