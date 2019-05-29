import React from "react"
import axios from "axios"
import topics from "./topics.js"
const { Consumer, Provider } = React.createContext()

class DataProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            character: "",
            place: "",
            activity: "",
            characterGif: "",
            locationGif: "",
            activityGif: ""
        }
    }

    getRandomCharacter = (category) => {
        const { animals, videoGameCharacters, marvelCharacters, disneyCharacters } = topics.characters
        const anyArr = [...animals, ...videoGameCharacters, ...marvelCharacters, ...disneyCharacters]

        category === "any" ? 
            this.setState({character: anyArr[Math.floor(Math.random() * anyArr.length)]}, this.getCharacterGif) 
            : 
        category === "animals" ? 
            this.setState({character: animals[Math.floor(Math.random() * animals.length)]}, this.getCharacterGif)
            : 
        category === "videoGame" ? 
            this.setState({character: videoGameCharacters[Math.floor(Math.random() * videoGameCharacters.length)]}, this.getCharacterGif) 
            : 
        category === "marvel" ? 
            this.setState({character: marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)]}, this.getCharacterGif) 
            : 
        category === "disney" ? 
            this.setState({character: disneyCharacters[Math.floor(Math.random() * disneyCharacters.length)]}, this.getCharacterGif) 
            : 
        alert("no character type selected")
    }

    getRandomLocation = () => {
        const { locations } = topics
        const random = Math.floor(Math.random() * locations.length)
        this.setState({place: locations[random]}, this.getLocationGif)
    }

    getRandomActivity = () => {
        const { activities } = topics
        const random = Math.floor(Math.random() * activities.length) 
        this.setState({activity: activities[random]}, this.getActivityGif)
    }

    getCharacterGif = () => {
        console.log(this.state.character)
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.character}&limit=1&rating=g&api_key=2BAuMS8Ig47TgMnBJXotOjDbQtjy6bYa`).then(response => {
            const { url } = response.data.data[0] 
            this.setState({ characterGif: url })
        })
    }

    getLocationGif = () => {
        console.log(this.state.place)
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.place}&limit=1&rating=g&api_key=2BAuMS8Ig47TgMnBJXotOjDbQtjy6bYa`).then(response => {
            const { url } = response.data.data[0] 
            this.setState({ locationGif: url })
        })
    }

    getActivityGif = () => {
        console.log(this.state.activity)
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.activity}&limit=1&rating=g&api_key=2BAuMS8Ig47TgMnBJXotOjDbQtjy6bYa`).then(response => {
            const { url } = response.data.data[0] 
            this.setState({ activityGif: url })
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                getRandomCharacter: this.getRandomCharacter,
                getRandomLocation: this.getRandomLocation,
                getRandomActivity: this.getRandomActivity,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default DataProvider

export const withData = Comp => props => (
    <Consumer>
        {value => <Comp {...value} {...props} />}
    </Consumer>
)