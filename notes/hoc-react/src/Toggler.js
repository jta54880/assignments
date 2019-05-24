import React from 'react';

class Toggler extends React.Component {
    constructor() {
        super()
        this.state = { on: false }
    }

    toggle = () => {
        // this.setState(({on}) => ({ on: !on}))
        this.setState(prevState => {
            return {on: !prevState.on}
        })
    }

    render() { 
        const { on } = this.state
        const { component, ...props } = this.props
        const C = component
        return ( 
            <C on={on} toggle={this.toggle} {...props} />
         )
    }
}
 
export default Toggler

export const withToggler = C => props => <Toggler component={C} {...props} />