import React from "react"
const { Consumer, Provider } = React.createContext()

class DataProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            showMenu: false
        }
    }

    openMenu = () => {
        this.setState({ showMenu: true })
    }

    closeMenu = () => {
        this.setState({ showMenu: false })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                openMenu: this.openMenu,
                closeMenu: this.closeMenu
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default DataProvider

export const withGlobalState = Comp => props => (
    <Consumer>
        {value => <Comp {...value} {...props} />}
    </Consumer>
)