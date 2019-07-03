import React, {useState} from 'react';
import { withTodos } from "./TodoProvider"

const Todo = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const handleEditMode = () => {
        setEditMode(!editMode)
        setTitle(props.title)
        setDescription(props.description)
    }
    const handleSaveEdits = (id, title, description) => {
        const updatedTodo = {
            title,
            description
        }
        props.putTodo(id, updatedTodo)
        setEditMode(!editMode)
        setTitle("")
        setDescription("")
    }
    console.log(props.description)
    return (
        <div>
            {!editMode ?
            <>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <button onClick={handleEditMode}>Edit</button>
            <button onClick={() => props.deleteTodos(props.id)}>Remove</button>
            </>
            :
            <>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input 
                type="text"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button onClick={() => handleSaveEdits(props.id, title, description)}>Save Edits</button>
            </>
            }
        </div>
    );
};

export default withTodos(Todo)