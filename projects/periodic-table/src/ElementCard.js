import React from "react"

const ElementCard = (props) => {
    const {element, toggleClass} = props
    const {isActive, name, number, symbol, atomic_mass, category, period} = element
    const activeClassName = isActive ? "visiible" : "invisible"
    console.log(period)
    const cardColor = category === "diatomic nonmetal" ? {
        background: "slategray"
    } : category === "noble gas" ? {
        background: "yellow"
    } : category === "alkali metal" ? {
        background: "limegreen"
    } : category === "alkaline earth metal" ? {
        background: "blue"
    } : category === "metalloid" ? {
        background: "red"
    } : category === "nonmetal" ? {
        background: "purple"
    } : category === "halogen" ? {
        background: "pink"
    } : category === "metal" ? {
        background: "aqua"
    } : category === "transition metal" ? {
        background: "gray"
    } : category === "lanthanoid" ? {
        background: "tomato"
    } : category === "actinoid" ? {
        background: "coral"
    } : {
        background: "lightgreen"
    }

    return (
        <div className={`card-container ${symbol.toLowerCase()}`} style={{gridArea: `${symbol.toLowerCase()}`}}>
            <button 
                style={cardColor}
                className="btn-container" 
                onClick={() => toggleClass(number)}
            >   
                <div className="wrapper">
                    <div className="element-atomic-number">{number}</div>
                    <div className="element-symbol">{symbol}</div>
                </div>
            </button>
            <div className={`more-info-container ${activeClassName}`}>
                <div className="element-name">{name}</div>
                <div className="element-atomic-mass">Atomic Mass - {atomic_mass}
                </div>
                <div className="element-group">Type - {category}</div>
            </div>
        </div>
    )
}

export default ElementCard