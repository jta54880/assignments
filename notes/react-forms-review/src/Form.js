// import React, { Component } from 'react';

// class Form extends Component {
//     constructor(){
//         super()

//         this.state = {
//             fName: '',
//             lName: '',
//             selectCookie: false,
//             selectChips: false,
//             selectPickle: false,
//             people: []
//         }
//     }

//     handleChange = (event) => {
//         const {name, value, type, checked} = event.target

//         return type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})

//         // this.setState({
//         //     [event.target.name]: event.target.value
//         // })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()

//         const options = []
//         this.state.selectCookie && options.push("Cookie")
//         this.state.selectChips && options.push("Chips")
//         this.state.selectPickle && options.push("Pickle")

//         const newPerson = {
//             fName: this.state.fName,
//             lName: this.state.lName,
//             selectedOptions: options
//         }
    
//         this.setState((prevState)=>{
//             return {
//                 fName: "",
//                 lName: "",
//                 selectCookie: false,
//                 selectChips: false,
//                 selectPickle: false,
//                 people: [...prevState.people, newPerson]
//             }
//         })
//         document.getElementById("form").reset()
//     }

//     render() {
//         const mappedPeople = this.state.people.map((person, i)=> {
//             return <div key={i + person.fName}>
//                         <h1>{person.fName} {person.lName}</h1>
//                         <h3>Selected Options: {person.selectedOptions.toString()}</h3>
//                     </div>
//         })
//         // console.log(mappedPeople[0])
//         // console.log(this.props)
//         console.log(this.state.selectCookie)
//         return (
//             <>
//                 <form id="form" onSubmit={this.handleSubmit}>
//                     <input  type="text"
//                             placeholder="First Name" 
//                             name="fName"
//                             value={this.state.fName}
//                             onChange={this.handleChange}
//                             />
//                     <input  type="text"
//                             placeholder="Last Name" 
//                             name="lName"
//                             value={this.state.lName}
//                             onChange={this.handleChange}
//                             />
//                     <label> Cookie
//                         <input type="checkbox"
//                                 name="selectCookie"
//                                 value={this.state.selectCookie}
//                                 onChange={this.handleChange}
//                                 />
//                     </label>
//                     <label> Chips
//                         <input type="checkbox"
//                                 name="selectChips"
//                                 value={this.state.selectChips}
//                                 onChange={this.handleChange}
//                                 />
//                     </label>
//                     <label> Pickle
//                         <input type="checkbox"
//                                 name="selectPickle"
//                                 value={this.state.selectPickle}
//                                 onChange={this.handleChange}
//                                 />
//                     </label>
//                     <button>Submit</button>
//                 </form>
//                 {mappedPeople}
//             </>
//         );
//     }
// }

// export default Form;

import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            fName: '',
            lName: '',
            selectedSoda: '',
            gender: '',
            isChecked: false,
            checkedItems: [],
            people: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    handleCheckbox = (event) => {
        let {value, checked} = event.target
        checked ? 
            this.setState(prevState => {
                return {
                    isChecked: checked,
                    checkedItems: [...prevState.checkedItems, value]
                }
            })
            :
            this.setState(prevState => {
                return {
                    isChecked: checked,
                    checkedItems: prevState.checkedItems.filter((checkedItem)=> checkedItem !== value )
                }
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            fName: this.state.fName,
            lName: this.state.lName,
            selectedSoda: this.state.selectedSoda,
            selectedOptions: this.state.checkedItems
            }

        this.setState((prevState)=>{
            return {
                people: [...prevState.people, newPerson]
            }
        }, ()=>{
            this.clearForms()
        })

    }

    clearForms = () => {
        this.setState({
            fName: '',
            lName: '',
            selectedSoda: '',
            gender: '',
            isChecked: false,
        })
    }

    render() {
        const mappedPeople = this.state.people.map((person, i)=> {
            return <div key={i + person.fName}>
                        <h1>{person.fName} {person.lName}</h1>
                        <h3>Selected Items: {person.selectedOptions.toString()}</h3>
                        <h3>Drink of Choice: {person.selectedSoda}</h3>
                    </div>
        })
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text"
                            placeholder="First Name" 
                            name="fName"
                            value={this.state.fName}
                            onChange={this.handleChange}
                            />
                    <input  type="text"
                            placeholder="Last Name" 
                            name="lName"
                            value={this.state.lName}
                            onChange={this.handleChange}
                            />
                    Male
                    <input  type="radio" 
                            name="gender"
                            value="male"
                            onChange={this.handleChange}
                            />
                    Female                    
                    <input  type="radio" 
                            name="gender"
                            value="female"
                            onChange={this.handleChange}
                            />
                    Other
                    <input  type="radio" 
                            name="gender"
                            value="other"
                            onChange={this.handleChange}
                            />
                    <select name='selectedSoda' value={this.state.selectedSoda} onChange={this.handleChange}>
                        <option value="CocaCola">Coca Cola</option>
                        <option value="Pepsi">Pepsi</option>
                        <option value="Dr. Pepper">Dr. Pepper</option>
                        <option value="Surge">Surge</option>
                    </select>
                    <label>
                        Cookie
                        <input type="checkbox" value='cookie' name="isChecked" onChange={this.handleCheckbox} />
                    </label>
                    <label>
                        Chips
                        <input type="checkbox" value='chips' name="isChecked" onChange={this.handleCheckbox} />
                    </label>
                    <label>
                        Pickle
                        <input type="checkbox" value='pickle' name="isChecked" onChange={this.handleCheckbox} />
                    </label>
                    <button>Submit</button>
                </form>
                {mappedPeople}
            </>
        );
    }
}

export default Form;