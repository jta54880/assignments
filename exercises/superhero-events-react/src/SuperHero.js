import React from "react"

const SuperHero = (props) => {
    const {name, show, imageName} = props.hero
    const backgroundImgStyle = {
        height: "100%",
        width: "100%",
        backgroundImage: `url(${imageName})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }
    const showTitleStyle = {
        margin: "5pt",
        background: "white",
        borderRadius: "2pt",
    }
    return (
        <div 
            className="card card-container" 
            onClick={() => props.handleClick(name)}
        >
            <h1>{name}</h1>
            <div style={backgroundImgStyle}>
                <span style={showTitleStyle}>{show}</span>
            </div>
        </div>
    )
}

export default SuperHero