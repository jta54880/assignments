import React from "react"
import { Link } from "react-router-dom"
import { withProvider } from "./GlobalProvider"

const HitList = (props) => {
    const { hitList } = props
    const hitListTargets = hitList.map(target => 
        <Link key={target.name} to={`/hit_list/${target.name}`} className="target">
            <div className="target-img" style={{backgroundImage: `url(${target.image})`}}>
                <p>{target.name}</p>
            </div>
        </Link>
    )
    return (
        <div className="body hit-list">
            {hitListTargets}
        </div>
    )
}

export default withProvider(HitList)