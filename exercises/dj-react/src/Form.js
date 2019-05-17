import React from "react"

const Form = (props) => {
    const {firstName, lastName, age, gender, isDubstep, isTechno, handleChange} = props
    return (
        <div>
            <input 
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name..."
                onChange={handleChange}
            />
            <br/>
            <input 
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name..."
                onChange={handleChange}
            />
            <br/>
            <input 
                type="number"
                name="age"
                value={age}
                placeholder="Age..."
                onChange={handleChange}
            />
            <br/>
            <label>
                <input 
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleChange}
                /> Female
            </label>
            <br/>
            <label>
                <input 
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleChange}
                /> Male
            </label>
            <br/>
            <select name="style" onChange={handleChange}>
                <option value="no style selected">-Select Style-</option>
                <option value="disco">Disco</option>
                <option value="dubstep">DubStep</option>
                <option value="techno">Techno</option>
            </select>
            <br/>
            <label>
                <input
                    type="checkbox"
                    name="isDubstep" 
                    value={isDubstep}
                    onChange={handleChange}
                /> DubStep?
            </label>
            <br/>
            <label>
                <input
                    type="checkbox"
                    name="isTechno"
                    value={isTechno} 
                    onChange={handleChange}
                /> Techno?
            </label>
        </div>
    )
}

export default Form