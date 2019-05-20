import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            listItems: [],
            name: ""
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        const person = {
            name: this.state.name,
            inEditMode: false
        }
        e.preventDefault()
        this.setState(prevState => {
            // prevState.listItems.push(prevState.name)
            return {listItems: [...prevState.listItems, person], name: ""}
        })
    }

    handleDelete = (i) => {
        this.setState(prevState => {
            prevState.listItems.splice(i,1)
            return {listItems: prevState.listItems}
        })
    }

    handleEdit = (i) => {
        console.log("fired", i)
        this.setState(prevState => {
            const updatedListItems = [...prevState.listItems]
            updatedListItems[i].inEditMode = true
            return {listItems: updatedListItems}
        })
    }

    handleEditDone = (i) => {
        console.log("hello",i)
        this.setState(prevState => {
            const updatedListItems = [...prevState.listItems]
            updatedListItems[i].inEditMode = false
            return {listItems: updatedListItems}
        })
    }

    handleChangeEdit = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        

        const orderedListItems = this.state.listItems.map((item, i) => {
            const defaultStyle = {}
            const editStyle = {}
            item.inEditMode ? defaultStyle.display = "none" : editStyle.display = "none"
            return (
                <li key={item.name+i}>
                    <div style={defaultStyle} onClick={() => this.handleEdit(i)}>
                        {item.name}
                        <button onClick={() => this.handleDelete(i)}>|x|</button>
                    </div>
                    <input 
                        style={editStyle} 
                        type="text" 
                        name="name"
                        value={item.name}
                        onChange={this.handleChangeEdit}
                        onDoubleClick={() => this.handleEditDone(i)}
                    />
                </li>
            )
        })
        console.log(this.state.listItems)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Add Name..."
                        onChange={this.handleChange}
                    />
                    <button>Add Name</button>
                </form>
                <h1>Added Input: {this.state.name}</h1>
                <ol>
                    {orderedListItems}
                </ol>
            </div>
        )
    }
}

export default App