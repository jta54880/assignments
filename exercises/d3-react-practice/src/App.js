import React from "react"
import * as d3 from "d3"
import PieSVG from "./PieSVG"
import BarSVG from "./BarSVG"

const App = () => {
    const tempData = [88, 75, 103, 99, 102, 59]
    return (
        <>
        <PieSVG
            data={tempData}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
        />
        <BarSVG
            data={tempData}
            width={300}
            height={150}
        />
        </>
    )
}

export default App