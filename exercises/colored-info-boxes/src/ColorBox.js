import React from "react"

const ColorBox = (props) => {
    const {box} = props
    const {background, title, subtitle, information} = box
    return (
        <div style={{fontFamily: "Arial", background, height: "auto", minWidth: "40vw", flex: "1 1 50%"}}>
            <h1 style={{marginLeft: "10%"}}>{title}</h1>  
            <h3 style={{marginLeft: "10%"}}>{subtitle}</h3>
            <p style={{marginLeft: "10%"}}>{information}</p>
        </div>
    )
}

export default ColorBox