import React from 'react'

const Main = (props) => {
    console.log(props)
    const { isDark, theme, toggle, themeSelect } = props
    // const color = isDark ? "dark" : "light"
    const color = 
        theme === "dark" ? "dark" 
        : 
        theme === "light" ? "light" 
        : 
        theme === "neo" ? "neo" 
        : 
        "vanilla"
    console.log(theme)
    return (
        <div className={`main ${color}-theme`}>
            <h1>Click the button to toggle the Light theme!</h1>
            <button className={`${color}-button toggle-button`} onClick={toggle}
            >Toggle Theme</button>
            <select name="theme" onChange={themeSelect}>
                <option value="no theme selected">Select a Theme</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="neo">Neo</option>
            </select>
        </div>
    )
}

export default Main