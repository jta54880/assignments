import React from "react"
import { withProvider } from "./GlobalProvider"

const Target = (props) => {
    console.log(props)
    const { hitList } = props
    const { name } = props.match.params
    const target = hitList.find(hitee => hitee.name === name)
    return (
        <div className="body target">
            <div className="target-img" style={{backgroundImage: `url(${target.image})`}}>
                <h2>{target.name}</h2>
            </div>
        </div>
    )
}

export default withProvider(Target)