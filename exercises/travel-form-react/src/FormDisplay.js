import React from "react"

const FormDisplay = (props) => {
    const {fName, lName, age, gender, destination, dietaryRestrictions} = props.passenger

    return (
        <div>
            <h2>Name: {fName} {lName}</h2>
            <h3>Age: {age}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Destination: {destination}</h3>
            <h3>Dietary Restrictions: {dietaryRestrictions.toString()}</h3>
        </div>
    )
}

export default FormDisplay