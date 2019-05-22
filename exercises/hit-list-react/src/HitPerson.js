import React from "react"

const HitPerson = (props) => {
    console.log(props)
    const { name } = props.match.params
    const hitPerson = props.hitList.find(person => person.name === name)
    
    return (
        <div>
            <h1>{hitPerson.name}</h1>
            <div 
                style={
                    {
                        backgroundImage: `url(${hitPerson.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "300pt", 
                        width: "275pt"
                    }
                }
            >
            </div>
        </div>
    )
}

export default HitPerson