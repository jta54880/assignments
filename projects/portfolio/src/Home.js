import React from "react"
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faReact, faNode } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
    return (
        <div className="body home">
            <Fade duration={3000}>
                <div className="top-background">
                    <Fade left>
                        <div className="background-one">
                            <LightSpeed delay={6000} duration={2500}>
                                <h1>Hey, My Name Is Jake</h1>
                            </LightSpeed>
                        </div>
                    </Fade>
                    <Fade right delay={500}>
                        <div className="background-two"></div>
                    </Fade>
                    <Fade left delay={1000}>
                        <div className="background-three"></div>
                    </Fade>
                    <Fade right delay={1500}>
                        <div className="background-four"></div>
                    </Fade>
                    <Fade left delay={2000}>
                        <div className="background-five"></div>
                    </Fade>
                </div>
                <div className="top">
                    <Fade left delay={2000} duration={4000}>
                        <div className="me" style={{backgroundImage: `url(${familyMan})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade left delay={2200} duration={4000}>
                        <div className="mom" style={{backgroundImage: `url(${mom})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade right delay={3000} duration={4000}>
                        <div className="wes" style={{backgroundImage: `url(${wes})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade right delay={2500} duration={4000}>
                        <div className="polo" style={{backgroundImage: `url(${polo})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                    <Fade left delay={3500} duration={4000}>
                        <div className="lui" style={{backgroundImage: `url(${lui})`, backgroundRepeat: "no-repeat"}}></div>
                    </Fade>
                </div>
                <div className="middle-one">
                        <LightSpeed delay={6000} duration={2500}>
                    <div className="middle-one-background-one">
                            <h1>I'm a Fullstack MERN Developer</h1>
                    </div>
                        </LightSpeed>
                    <Fade left delay={2000} duration={4000}>
                        <div className="coder-container">
                            <div className="coder" style={{backgroundImage: `url(${coder})`, backgroundRepeat: "no-repeat"}}></div>
                        </div>
                    </Fade>
                    <LightSpeed delay={6000} duration={2500}>
                        <div className="badges">
                            <FontAwesomeIcon icon={faHtml5} size="3x" color="limegreen"/>
                            <FontAwesomeIcon icon={faCss3} size="3x" color="coral"/>
                            <FontAwesomeIcon icon={faJs} size="3x" color="blue"/>
                            <FontAwesomeIcon icon={faReact} size="3x" color="lightblue"/>
                            <FontAwesomeIcon icon={faNode} size="3x" color="green"/>
                            <p style={{color: "red"}}>MongoDB</p>
                            <p style={{color: "#FAAFAA"}}>Express</p>
                        </div>
                    </LightSpeed>
                </div>
                <div className="middle-two">
                    <LightSpeed delay={6000} duration={2500}>
                        <div className="middle-two-background-one">
                            <h1>I'm a Football Coach and Analyst</h1>
                        </div>
                    </LightSpeed>
                    <Fade right delay={2000} duration={4000}>
                        <div className="coach-container">
                            <div className="coach" style={{backgroundImage: `url(${coach})`, backgroundRepeat: "no-repeat"}}></div>
                        </div>
                    </Fade>
                    <LightSpeed delay={6000} duration={2500}>
                        <div className="middle-two-background-two">
                            <h1>12 Years Experience as a Coach/Teacher</h1>
                        </div>
                    </LightSpeed>
                </div>
                <div className="bottom">
                    <LightSpeed delay={6000} duration={2500}>
                        <div className="bottom-background-one">
                            <h1>I'm Also a Maker</h1>
                        </div>
                    </LightSpeed>
                    <Fade bottom delay={2000} duration={4000}>
                        <div className="builder-container">
                            <div className="builder" style={{backgroundImage: `url(${builder})`, backgroundRepeat: "no-repeat"}}></div>
                        </div>
                    </Fade>
                    <LightSpeed delay={6000} duration={2500}>
                        <div className="bottom-background-two">
                            <h1>Check Out Some of My Projects</h1>
                        </div>
                    </LightSpeed>
                </div>
            </Fade>
        </div>
    )
}

export default Home