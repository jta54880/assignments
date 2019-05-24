import React from 'react';
import {withToggler} from "./Toggler"

const Menu = (props) => {
    const {on, toggle} = props
    return (
        <div>
            <button onClick={toggle}>{on ? "Hide Menu" : "Show Menu"}</button>
            <nav className={on ? "show" : "hide"}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repo's</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
            </nav>
        </div>
    )
}

export default withToggler(Menu)