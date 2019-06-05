import React from "react"
import { withData } from "./DataProvider";

const SavedSketches = (props) => {
    const mappedSketches = props.savedSketches.map((sketch, i) => 
        <div key={sketch+i} className="sketch" style={{backgroundImage: `url(${sketch})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "50vw", height: "50vh"}}></div>    
    )
    return (
        <div className="saved-container">
            <h1 style={{margin: "0 auto"}}>Saved Sketches (Count: {props.savedSketches.length})</h1>
            <div className="sketches-container">
                {mappedSketches}
            </div>
        </div>
    )
}

export default withData(SavedSketches)