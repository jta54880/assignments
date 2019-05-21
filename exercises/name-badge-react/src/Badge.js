import React from "react"

const Badge = (props) => {
    const {i} = props
    const {firstName, lastName, email, placeOfBirth, phone, favoriteFood, description} = props.person
    const badgeStyle = i % 2 === 0 ? {
        background: "red"
    } : {
        background: "blue"
    }
    return (
        <div className="badge-container">
            <h1 className="title" style={badgeStyle}>Badge: </h1>
            <p className="name">Name: {firstName} {lastName}</p>
            <p className="phone">Phone: {phone}</p>
            <p className="place-of-birth">Place of Birth: {placeOfBirth}</p>
            <p className="favorite-food">Favorite Food: {favoriteFood}</p>
            <p className="email">Email: {email}</p>
            <div className="description">{description}</div>
        </div>
    )
}

export default Badge