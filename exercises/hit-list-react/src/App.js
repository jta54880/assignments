import React from "react"
import { Switch, Route } from "react-router-dom"
import Axios from "axios"
import Navbar from "./Navbar"
import Home from "./Home"
import HitList from "./HitList"
import HitPerson from "./HitPerson"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hitList: []
        }
    }

    componentDidMount() {
        Axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
            this.setState({hitList: response.data})
        })  
    }

    render() {
        console.log(this.state.hitList[0])
        return (
            <div className="main-container">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route 
                        exact path="/hit_list" 
                        render={(props) => <HitList {...props} hitList={this.state.hitList} />} 
                    />
                    <Route 
                        path="/hit_list/:name" 
                        render={(props) => <HitPerson {...props} hitList={this.state.hitList} />} 
                    />
                </Switch>
            </div>
        )
    }
}

export default App