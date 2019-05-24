import React from 'react'

const Footer = (props) => {
    const { isDark } = props
    const color = isDark ? "dark" : "light"
    return (
        <div className={`footer ${color}-theme-footer`}>
            <h2>The amazing Footer</h2>
        </div>
    )
}

export default Footer