import React from 'react'
const { Consumer, Provider } = React.createContext()

class ThemeProvider extends React.Component {
    constructor() {
        super();
        this.state = { 
            isDark: false,
            theme: ""
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return { isDark: !prevState.isDark }
        })
    }

    handleTheme = (e) => {
        console.log("fired")
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() { 
        return ( 
            <Provider value={{
                toggle: this.toggle,
                themeSelect: this.handleTheme,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        )
    }
}
 
export default ThemeProvider

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)