import React from "react"
import ElementCard from "./ElementCard"
import "./styles.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            elements: [],
            isActive: false,
            show: false
        }
        this.toggleClass = this.toggleClass.bind(this)
    }

    componentDidMount() {
        fetch("./elements.json")
            .then(response => response.json())
            .then(response => {
                for (let i = 0; i < response.elements.length; i++) {
                    response.elements[i].isActive = false
                }
                this.setState({elements: response.elements}) 
                
            })
    }

    showModal = (num) => {
        // this.setState({ elements: true });
        this.setState(prevState => {
            const updatedElements = prevState.elements.map(element => {
                if (element.number === num) {
                    element.isActive = true 
                    return element   
                }
                return element
            })
            return { elements: updatedElements }
        })
    }
    
    hideModal = (num) => {
        // this.setState({ show: false });
        this.setState(prevState => {
            const updatedElements = prevState.elements.map(element => {
                if (element.number === num) {
                    element.isActive = false 
                    return element   
                }
                return element
            })
            return { elements: updatedElements }
        })
    }

    toggleClass(num) {
        console.log("fired", num)
        this.setState(prevState => {
            const updatedElements = prevState.elements.map(element => {
                if (element.number === num) {
                    element.isActive = !element.isActive 
                    return element   
                }
                return element
            })
            return { elements: updatedElements }
        })
    }

    render() {
        const elementCards = this.state.elements.map(element => (
            <ElementCard
                key={element.number}
                element={element}
                isActive={this.state.isActive}
                show={this.state.show}
                handleOpen={this.showModal}
                handleClose={this.hideModal}
                toggleClass={this.toggleClass}
            />
        ))
        return (
            <div className="elements-container">
                {elementCards}
            </div>
        )
    }
}

export default App