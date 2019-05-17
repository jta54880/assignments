import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            listItems: [],
            name: "",
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            // prevState.listItems.push(prevState.name)
            return {listItems: [...prevState.listItems, prevState.name], name: ""}
        })
    }

    handleDelete = (i) => {
        this.setState(prevState => {
            prevState.listItems.splice(i,1)
            return {listItems: prevState.listItems}
        })
    }

    render() {
        const orderedListItems = this.state.listItems.map((item, i) => (
            <li key={item+i}>{item}<button onClick={() => this.handleDelete(i)}>|x|</button></li>
        ))
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