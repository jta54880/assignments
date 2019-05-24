import React from 'react'

const Navbar = (props) => {
    const { isDark } = props
    const color = isDark ? "dark" : "light"
    return (
        <div className={`navbar ${color}-theme-navbar`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> 
        </div>
    )
}

export default Navbar