import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import LightSpeed from "react-reveal/LightSpeed"
import builder from "./portfolio-svg/builder.svg"
import familyMan from "./portfolio-svg/familyMan.svg"
import coder from "./portfolio-svg/coder.svg"
import coach from "./portfolio-svg/coach.svg"
import wes from "./portfolio-svg/wes.svg"
import polo from "./portfolio-svg/polo.svg"
import lui from "./portfolio-svg/lui.svg"
import mom from "./portfolio-svg/mom.svg"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faReact, faNode } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="body home snap-container">
            <Fade duration={3000}>
                <div className="top-background">
                    <Fade left delay={500}>
                        <div className="background-one">
                            <LightSpeed delay={2700} duration={2500}>
                                <h1>Hey, My Name Is Jake</h1>
                            </LightSpeed>
                        </div>
                    </Fade>
                    <Fade right delay={700}>
                        <div className="background-two"></div>
                    </Fade>
                    <Fade left delay={900}>
                        <div className="background-three"></div>
                    </Fade>
                    <Fade right delay={1100}>
                        <div className="background-four"></div>
                    </Fade>
                    <Fade left delay={1300}>
                        <div className="background-five"></div>
                    </Fade>
                </div>
                <div id="one" className="top">
                    <Fade left duration={4000}>
                        <div className="me" style={{backgroundImage: `url(${familyMan})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade left duration={4000}>
                        <div className="mom" style={{backgroundImage: `url(${mom})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade right duration={4000}>
                        <div className="wes" style={{backgroundImage: `url(${wes})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade right duration={4000}>
                        <div className="polo" style={{backgroundImage: `url(${polo})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade left duration={4000}>
                        <div className="lui" style={{backgroundImage: `url(${lui})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                </div>


                <div className="snap-container">
                <div id="two" className="middle-one">
                    <div className="middle-one-background-one">
                            <h1>I'm a Fullstack MERN Developer</h1>
                    </div>
                        <div className="coder-container">
                            <div className="coder" style={{backgroundImage: `url(${coder})`, backgroundRepeat: "no-repeat"}}></div>
                        </div>
                        <div className="badges">
                            <FontAwesomeIcon icon={faHtml5} size="3x" color="limegreen"/>
                            <FontAwesomeIcon icon={faCss3} size="3x" color="coral"/>
                            <FontAwesomeIcon icon={faJs} size="3x" color="blue"/>
                            <FontAwesomeIcon icon={faReact} size="3x" color="lightblue"/>
                            <FontAwesomeIcon icon={faNode} size="3x" color="green"/>
                            <p style={{color: "red"}}>MongoDB</p>
                            <p style={{color: "#FAAFAA"}}>Express</p>
                        </div>
                </div>
                <div id="three" className="middle-two">
                        <div className="middle-two-background-one">
                            <h1 style={{color: "#f7f7f7"}}>I'm a Football Coach and Analyst</h1>
                        </div>
                        <div className="coach-container">
                            <div className="coach" style={{backgroundImage: `url(${coach})`, backgroundRepeat: "no-repeat"}}></div>
                        </div>
                        <div className="middle-two-background-two">
                            <h1>12 Years Experience as a Coach/Teacher</h1>
                        </div>
                </div>
                <div id="four" className="bottom">
                        <div className="bottom-background-one">
                            <h1 style={{color: "#f7f7f7"}}>I'm Also a Maker</h1>
                        </div>
                        <div className="builder-container">
                            <div className="builder" style={{backgroundImage: `url(${builder})`, backgroundRepeat: "no-repeat"}}></div>
                        </div>
                        <div className="bottom-background-two">
                            <Link to="/projects"><h1>Check Out Some of My Projects</h1></Link>
                        </div>
                </div>
                </div>
            </Fade>
        </div>
    )
}

export default Home