import React from "react"
import { withData } from "./DataProvider.js"

class PlayErased extends React.Component {
    constructor() {
        super()
        this.state = {
            charCategory: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getRandomCharacter(this.state.charCategory)
        this.props.getRandomLocation()
        this.props.getRandomActivity()
    }

    render() {
        return (
            <div className="body erased-container">
                <form onSubmit={this.handleSubmit}>
                    <select name="charCategory" onChange={this.handleChange}>
                        <option value="">Select Character Category</option>
                        <option value="any">Any Character</option>
                        <option value="animals">Animals</option>
                        <option value="videoGame">Video Game Characters</option>
                        <option value="marvel">Marvel Characters</option>
                        <option value="disney">Disney Characters</option>
                    </select>
                    <button>Generate Topics</button>
                </form>
                <div className="topics-container">
                    <div className="character">Character: {this.props.character}</div>
                    <div className="location">Location: {this.props.place}</div>
                    <div className="activity">Activity: {this.props.activity}</div>
                    
                    <div style={{backgroundImage: `url(${this.props.characterGif.url})`, backgroundPosition: "center", backgroundSize: "cover"}} className="character-gif"></div>

                    <div style={{backgroundImage: `url(${this.props.locationGif.url})`, backgroundPosition: "center", backgroundSize: "cover"}} className="location-gif"></div>

                    <div style={{backgroundImage: `url(${this.props.activityGif.url})`, backgroundPosition: "center", backgroundSize: "cover"}} className="activity-gif"></div>
                </div>
            </div>
        )
    }
}

export default withData(PlayErased)