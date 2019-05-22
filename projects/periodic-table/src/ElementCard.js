import React from "react"

const ElementCard = (props) => {
    const {element, toggleClass} = props
    const {isActive, name, number, symbol, atomic_mass, category, period} = element
    const activeClassName = isActive ? "visiible" : "invisible"
    const showHideClassName = isActive ? "modal display-block" : "modal display-none"
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
            <div
                style={cardColor}
                className="btn-container" 
                
            >   
                <div className="wrapper">
                    <button onClick={() => props.handleOpen(number)}>+</button>
                    <div className="element-atomic-number">{number}</div>
                    <div className="element-symbol">{symbol}</div>
                </div>
            </div>
            <div className={`more-info-container ${activeClassName} ${showHideClassName}`}>
                <section className="modal-main" style={cardColor}>
                    <button onClick={() => props.handleClose(number)}>-</button>
                    <div className="element-name">{name}</div>
                    <div className="element-atomic-mass">Atomic Mass - {atomic_mass}
                    </div>
                    <div className="element-group">Type - {category}</div>
                </section>
            </div>
        </div>
    )
}

export default ElementCard