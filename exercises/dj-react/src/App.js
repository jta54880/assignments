import React from "react"
import Square from "./Square"
import "./styles.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "black", "black", "white"],
            colorArr: ["white", "black", "blue", "red", "purple", "pink", "green", "yellow"]
        }
    }

    handleBlackWhite = () => {
        this.setState(prevState => {
            const newColorArr = prevState.colors.map(color => {
                return color === "white" ? color = "black" : color === "black" ? color = "white" : color
            })
            return { colors: newColorArr }
        })
    }

    handleTopPurple = () => {
        this.setState(prevState => {
            const purpleArray = prevState.colors.map((color, i) => {
                return i === 0 || i === 1 ? color = "purple" : color
            })
            return { colors: purpleArray }  
        })
             
    }

    handleBottomLeftBlue = () => {
        this.setState(prevState => {
            const leftBlueArr = prevState.colors.map((color, i) => {
                return i === 2 ? color = "blue" : color
            })
            return { colors: leftBlueArr }
        })
    }

    handleBottomRightBlue = () => {
        this.setState(prevState => {
            const leftBlueArr = prevState.colors.map((color, i) => {
                return i === 3 ? color = "blue" : color
            })
            return { colors: leftBlueArr }
        })
    }

    handleOneRandom = () => {
        const random = Math.floor(Math.random() * this.state.colorArr.length)
        const randomColor = this.state.colorArr[random]
        this.setState(prevState => {
            const randomOneArr = prevState.colors.map((color, i) => {
                return i === 0 ? color = randomColor : color
            })
            return { colors: randomOneArr }
        })
    }

    handleTwoRandom = () => {
        const random = Math.floor(Math.random() * this.state.colorArr.length)
        const randomColor = this.state.colorArr[random]
        this.setState(prevState => {
            const randomTwoArr = prevState.colors.map((color, i) => {
                return i === 1 ? color = randomColor : color
            })
            return { colors: randomTwoArr }
        })
    }

    handleThreeRandom = () => {
        const random = Math.floor(Math.random() * this.state.colorArr.length)
        const randomColor = this.state.colorArr[random]
        this.setState(prevState => {
            const randomThreeArr = prevState.colors.map((color, i) => {
                return i === 2 ? color = randomColor : color
            })
            return { colors: randomThreeArr }
        })
    }

    handleFourRandom = () => {
        const random = Math.floor(Math.random() * this.state.colorArr.length)
        const randomColor = this.state.colorArr[random]
        this.setState(prevState => {
            const randomFourArr = prevState.colors.map((color, i) => {
                return i === 3 ? color = randomColor : color
            })
            return { colors: randomFourArr }
        })
    }

    handleRandomAll = () => {
        this.setState(prevState => {
            const randomAllArr = prevState.colors.map((color, i) => {
                const random = Math.floor(Math.random() * this.state.colorArr.length)
                const randomColor = this.state.colorArr[random]
                    return color = randomColor
            })
            return { colors: randomAllArr }
        })
    }

    handleResetAll = () => {
        const resetColorArr = ["white", "white", "white", "white"]
        this.setState({ colors: resetColorArr })
    }

    render() {
        const squares = this.state.colors.map((color, i) => 
            <Square
                key={color+i}
                color={color}
                id={"square"+i}
            />
        )
        return (
            <div className="container">
                {squares}
                <div className="btns">
                    <button 
                        className="btn-black-white" 
                        onClick={this.handleBlackWhite}>
                        Change All Black/White
                    </button>
                    <button 
                        className="btn-top-purple" 
                        onClick={this.handleTopPurple}>
                        Change Top Purple
                    </button>
                    <button 
                        className="btn-bottom-left-blue" 
                        onClick={this.handleBottomLeftBlue}>
                        Change Bottom Left Blue
                    </button>
                    <button 
                        className="btn-bottom-right-blue" 
                        onClick={this.handleBottomRightBlue}>
                        Change Bottom Right Blue
                    </button>
                    <button 
                        className="btn-one-random" 
                        onClick={this.handleOneRandom}>
                        Randomly Change Box 1 Color
                    </button>
                    <button 
                        className="btn-two-random" 
                        onClick={this.handleTwoRandom}>
                        Randomly Change Box 2 Color
                    </button>
                    <button 
                        className="btn-three-random" 
                        onClick={this.handleThreeRandom}>
                        Randomly Change Box 3 Color
                    </button>
                    <button 
                        className="btn-four-random" 
                        onClick={this.handleFourRandom}>
                        Randomly Change Box 4 Color
                    </button>
                    <button 
                        className="btn-random-all" 
                        onClick={this.handleRandomAll}>
                        Randomly Change All Boxes
                    </button>
                    <button 
                        className="btn-reset-all" 
                        onClick={this.handleResetAll}>
                        Reset All Box Colors
                    </button>
                </div>
            </div>
        )
    }
}

export default App