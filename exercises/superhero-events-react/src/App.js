import React from "react"
import SuperHero from "./SuperHero"
import "./styles.css"
import data from "./data.json"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            heros: data
        }
    }

    handleClick = (name) => {
        this.state.heros.forEach(hero => {
            hero.name === name && alert(hero.catchPhrase)
        })
    }

    render() {
        console.log(this.state.heros)
        const heroCards = this.state.heros.map((hero, i) => (
            <SuperHero
                key={i + hero.name}
                hero={hero}
                handleClick={this.handleClick}
            />
        ))
        return (
            <div className="cards-container">
                {heroCards}
            </div>
        )
    }
}

export default App