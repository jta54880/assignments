import React from "react"
import ColorBox from "./ColorBox"
import boxes from "./boxes"

const App = () => {
    const colorBoxes = boxes.map((box, i) => <ColorBox key={i} box={box}/>)
    return (
        <div style={{width: "100vw", display: "flex", flexWrap: "wrap"}}>
            {colorBoxes}    
        </div>
    )
}

export default App