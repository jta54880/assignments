import React from "react"
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"

const Home = () => {
    return (
        <div className="body home">
            <Fade duration={3000}>
                <div className="top">
                    <Fade>
                        <h1>hello</h1>
                    </Fade>
                </div>
                <div className="middle">
                    <Pulse>
                        <h1>hello again</h1>
                    </Pulse>
                </div>
                <div className="bottom">
                    <Fade>
                        <h1>goodbye?</h1>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}

export default Home