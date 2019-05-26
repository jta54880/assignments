import React from "react"
import { withJoke } from "./JokeProvider"

// class Jokes extends React.Component {
//     // componentDidMount = () => {
//     //     this.props.getRandomJoke()
//     // }

//     newJoke = () => {
//         this.props.getRandomJoke()  
//     }

//     render() {
//         return (
//             <div className="body jokes">
//                 Jokes...
//                 <button onClick={this.newJoke}>Generate Joke</button>
//                 {this.props.joke.value && <div className="joke">{this.props.joke.value.joke}</div>}
//             </div>
//         )
//     }
// }

const Jokes = (props) => {
    return (
        <div className="body jokes">
            <h1 className="joke-title">Chuck Norris Joke Generator</h1>
            <button 
                onClick={props.getRandomJoke}>Click for Random Chuck Norris Joke
            </button>
            {props.joke.value ? <div className="joke">{props.joke.value.joke}</div>
            :
            <div className="joke">Joke...</div>}
        </div>
    )
}

export default withJoke(Jokes)