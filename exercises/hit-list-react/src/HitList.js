import React from "react"
import { Link } from "react-router-dom"

const HitList = (props) => {
    const list = props.hitList.map(person => 
        <Link 
            className="link-people"
            key={person.name} 
            to={`/hit_list/${person.name}`}>
                <div className="list-items">
                    <div 
                        className="img" 
                        style={
                            {
                                backgroundImage: `url(${person.image})`,
                            }
                        }
                    >
                        <h2>{person.name}</h2>
                    </div>
                </div>
        </Link>)

    return (
        <div className="body list-container">
            {list}
        </div>
    )
}

export default HitList