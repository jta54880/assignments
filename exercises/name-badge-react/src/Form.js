import React from "react"

const Form = (props) => {
    const {firstName, lastName, email, placeOfBirth, phone, favoriteFood, description} = props
    return (
        <form onSubmit={props.handleSubmit} id="form">
            <input
                id="firstName" 
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={props.handleChange}
                required
                minLength= "3"
            />
            <input
                id="lastName" 
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={props.handleChange}
                required
                minLength= "3"
            />
            <input
                id="email" 
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={props.handleChange}
                required
                minLength= "3"
            />
            <input
                id="pob" 
                type="text"
                name="placeOfBirth"
                value={placeOfBirth}
                placeholder="Place of Birth"
                onChange={props.handleChange}
                required
                minLength= "3"
            />
            <input
                id="phone" 
                type="tel"
                name="phone"
                value={phone}
                placeholder="Phone"
                onChange={props.handleChange}
                required
                minLength= "10"
            />
            <input
                id="food" 
                type="text"
                name="favoriteFood"
                value={favoriteFood}
                placeholder="Favorite Food"
                onChange={props.handleChange}
                required
                minLength= "3"
            />
            <textarea 
                id="description"
                name="description"
                value={description}
                rows="8"
                cols="50"
                onChange={props.handleChange}
                placeholder="Tell us about yourself"
                required
                minLength= "3"
            ></textarea>
            <button id="button">Submit</button>
        </form>
    )
}

export default Form