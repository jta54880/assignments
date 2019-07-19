import React from "react"
import * as d3 from "d3"
import Arc from "./Arc"

const PieSVG = props => {
    const createPie = d3
        .pie()
        .value(d => d)
        .sort(null)
    const createArc = d3
        .arc()
        .innerRadius(props.innerRadius)
        .outerRadius(props.outerRadius)
    const colors = d3.scaleOrdinal(d3.schemeCategory10)
    const format = d3.format(".2f")
    const data = createPie(props.data)

    return (
        <svg width={props.width} height={props.height}>
            <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
                {data.map((d,i)=>
                    <Arc 
                        key={i}
                        data={d}
                        index={i}
                        createArc={createArc}
                        colors={colors}
                        format={format}
                    />
                )}
            </g>
        </svg>
    )
}


export default PieSVG