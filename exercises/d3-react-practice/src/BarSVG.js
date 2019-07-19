import React from "react"
import * as d3 from "d3"

const BarSVG = props => {
    let barPadding = 2
    let barColor = "#348AA7"
    let widthScale = d => d * 10
    let width = widthScale(props.d)
    let yMid = props.barHeight * 0.5
    return (
        <>
        <svg width={props.width} height={props.height}>
            {props.data.map((d,i)=>
                <g>
                    <rect x={i*30} y={props.height-d} width={25} height={d} fill={barColor}/>
                    <text data-name="Layer 2" x={i*30} y={props.height - 2} fill={"#faafaa"}>{d}</text>
                </g>
            )}
        </svg>
        </>
    )
}

export default BarSVG