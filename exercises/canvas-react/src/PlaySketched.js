import React from "react"
import { withData } from "./DataProvider.js"
import { Link } from "react-router-dom"

class PlaySketched extends React.Component {
    constructor() {
        super()
        this.state = {
            charCategory: "",
        }
    }

    componentDidMount = () => {
        this.setState({charCategory: "any"})
        window.scrollTo(0,0)
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
            <div className="body sketched-container">
                <p className="description">
                    Click the 'Generate Topics' button to be given a randomly generated 'Character', 'Location' and 'Activity'.  You must use these topics in your sketch on the 'Start Sketching' page.  Do your best to tell a clear story using AT LEAST these three topics.
                    <br/>
                    <br/>
                    You may filter the type of character you would like to generate by selecting from the character drop down menu. 
                    <br/>
                    <br/>
                    Good Luck, and Have Fun!!
                </p>
                <form className="form" onSubmit={this.handleSubmit}>
                    <select name="charCategory" onChange={this.handleChange}>
                        <option value="any">Any Character</option>
                        <option value="animals">Animals</option>
                        <option value="videoGame">Video Game Characters</option>
                        <option value="dc">DC Characters</option>
                        <option value="marvel">Marvel Characters</option>
                        <option value="disney">Disney Characters</option>
                    </select>
                    <button>Generate Topics</button>
                </form>
                <div className="topics-container">
                    {this.props.character !== "" && 
                        <>
                        <div className="character">Character: {this.props.character}</div>
                        <div 
                            style={{
                                backgroundImage: `url(${this.props.characterGif.url})`, 
                                backgroundPosition: "center", 
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                width: "80vw"
                            }} 
                            className="character-gif">
                        </div>
                    
                        <div className="location">Location: {this.props.place}</div>
                        <div 
                            style={{
                                backgroundImage: `url(${this.props.locationGif.url})`, backgroundPosition: "center", 
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                width: "80vw"
                            }} 
                            className="location-gif">
                        </div>
                        <div className="activity">Activity: {this.props.activity}</div>
                        <div 
                            style={{
                                backgroundImage: `url(${this.props.activityGif.url})`, backgroundPosition: "center", 
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                width: "80vw"
                            }} 
                            className="activity-gif">
                        </div>
                        <Link className="start-sketching-btn" to="/canvas">Start Sketching</Link>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default withData(PlaySketched)