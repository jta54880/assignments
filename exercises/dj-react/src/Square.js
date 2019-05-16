import React from "react"

function Square(props) {
    const {color, id} = props
    const squareColor = {background: color}
    return (
        <div className={`square ${id}`} style={squareColor}></div>
    )
}

export default Square