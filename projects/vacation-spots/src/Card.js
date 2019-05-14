import React from "react"

const Card = (props) => {
    const backgroundImg = {
        backgroundImage: `url(${props.vacationSpot.imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    } 

    const timeToGoColor = props.vacationSpot.timeToGo === "Spring" ? {
        background: "rgba(0,255,127,0.75)",
        color: "slategray"
    } : props.vacationSpot.timeToGo === "Summer" ? {
        background: "rgba(30, 139, 195, 0.75) ",
        color: "#f7f7f7"   
    } : props.vacationSpot.timeToGo === "Fall" ? {
        background: "rgba(255,104,4, 0.75)",
        color: "#f7f7f7"
    } : {
        background: "rgba(255,250,250, 0.75)",
        color: "navy"
    }

    const priceMeter = props.vacationSpot.price < 500 ? "$" : props.vacationSpot.price < 1000 ? "$ $" : "$ $ $"
    return (
        <div className="card-container">
            <div id="card-image" style={backgroundImg}>
                <div id="card-time-color" style={timeToGoColor}>
                    Best Time to Go: {props.vacationSpot.timeToGo}
                </div>
            </div>
            <h2 id="card-title">{props.vacationSpot.place}</h2>
            
            <h4 id="card-price">Price: ${props.vacationSpot.price}</h4>
            <div id="card-price-meter">Cost Meter: {priceMeter}</div>
        </div>
    )
}

export default Card