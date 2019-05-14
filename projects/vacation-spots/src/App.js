import React from "react"
import vacationSpots from "./vacationSpots"
import Card from "./Card"
import "./styles.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            spots: vacationSpots
        }
    }

    render() {
        const vacationCards = this.state.spots.map((spot, i) => (
            <Card
                key={i}
                vacationSpot={spot}
            />
        ))
        return (
            <div className="container">
                {vacationCards}
            </div>
        )
    }
}

export default App