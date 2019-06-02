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
            <div className="body erased-container">
                <p className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat alias quibusdam ullam accusantium impedit, facere excepturi possimus, reiciendis eveniet error magnam laboriosam eos minima! Nesciunt necessitatibus tenetur, placeat hic reprehenderit quibusdam dolor impedit aliquid quasi saepe eaque ipsam voluptatum similique minima vel tempora. Asperiores dolorem voluptatum ratione architecto nobis pariatur?
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
                                backgroundSize: "cover",
                                height: "80vh",
                                width: "80vw"
                            }} 
                            className="character-gif">
                        </div>
                    
                        <div className="location">Location: {this.props.place}</div>
                        <div 
                            style={{
                                backgroundImage: `url(${this.props.locationGif.url})`, backgroundPosition: "center", 
                                backgroundSize: "cover",
                                height: "80vh",
                                width: "80vw"
                            }} 
                            className="location-gif">
                        </div>
                        <div className="activity">Activity: {this.props.activity}</div>
                        <div 
                            style={{
                                backgroundImage: `url(${this.props.activityGif.url})`, backgroundPosition: "center", 
                                backgroundSize: "cover",
                                height: "80vh",
                                width: "80vw"
                            }} 
                            className="activity-gif">
                        </div>
                        <Link to="/canvas">Start Sketching</Link>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default withData(PlaySketched)