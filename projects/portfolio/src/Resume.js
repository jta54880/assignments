import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faReact, faNode, faAdobe, faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileExcel, faMobile, faEnvelope, faHome, faToolbox, faBriefcase, faUserTie, faUserGraduate, faIdCard, faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="resume-page-container">
            <div className="resume-container">
                <div className="resume-top">
                    <h1 className="name">Jake Afuvai</h1>
                    <h4>Husband  |  Father  ||  <span className="job-title">Full Stack Web Developer</span>  ||  Builder  |  Coach  |  Learner</h4>
                </div>
                <div className="resume-summary">
                    <div className="section-top">
                        <FontAwesomeIcon icon={faUserTie} size="4x" color="grey"/>
                        <h2>Who am I?</h2>
                    </div>
                    <p>I am a newly graduated, dedicated web developer with fresh and expanding knowledge of new technology. I am looking forward to a career where I can continue passionately learning and creating. I am humbled by the rate of change and magnitude of technology and its advancements, but am confident in my ability to learn new skills quickly and effectively.</p>
                </div>
                <div className="resume-skills sidebar">
                    <div className="contact-head">
                        <h2>Contact</h2>
                        <FontAwesomeIcon icon={faIdCard} size="3x" color="grey"/> 
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faMobile} size="2x" color="grey"/> 
                        <h3>801-317-5095</h3>
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color="grey"/>  
                        <h3>jtafuvai@gmail.com</h3> 
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faHome} size="2x" color="grey"/> 
                        <a href="http://jta.surge.sh"><h3>jta.surge.sh</h3></a>
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faGithubAlt} size="2x" color="grey"/>  
                        <a href="https://github.com/JakeAfuvai"><h3>github.com/JakeAfuvai</h3></a>
                    </div>
                    <div className="contact">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="grey"/>
                        <a href="https://linkedin.com/in/jake-afuvai"><h3>linkedin.com/in/jake-afuvai</h3></a>
                    </div>
                    <div>
                        <div className="skills-head">
                        <h2>Skills</h2>
                        <FontAwesomeIcon icon={faToolbox} size="4x" color="grey"/>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faJs} size="2x" color="grey"/>   
                            <h4>JavaScript - ES6</h4>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faReact} size="2x" color="grey"/>
                            <h4>React JS</h4>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faHtml5} size="2x" color="grey"/>
                            <h4>HTML 5</h4>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faCss3} size="2x" color="grey"/>
                            <h4>CSS 3</h4>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faAdobe} size="2x" color="grey"/>
                            <h4>Adobe Illustrator SVG <span>SVG Animation</span></h4>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faNode} size="2x" color="grey"/>
                            <h4>Node JS</h4>
                        </div>
                        <div className="skill">
                            <h4>Express JS</h4>
                        </div>
                        <div className="skill">
                            <h4>MongoDB</h4>
                        </div>
                        <div className="skill">
                            <h4>JSON Web Tokens</h4>
                        </div>
                        <div className="skill">
                            <h4>Axios</h4>
                        </div>
                        <div className="skill">
                            <h4>CRUD Principles</h4>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faGithubAlt} size="2x" color="grey"/>
                            <h4>Git Version Control</h4>
                        </div>
                        <div className="skill">
                            <h4>Google Sheets</h4>
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faFileExcel} size="2x" color="grey"/>
                            <h4>Microsoft Excel</h4>
                        </div>
                    </div>
                </div>
                <div className="resume-projects">
                    <div className="section-top">
                        <FontAwesomeIcon icon={faLaptopCode} size="4x" color="grey"/> 
                        <h2>Projects</h2>
                    </div>
                    <div className="project">
                        <a href="https://tieforcoaches.herokuapp.com"><h3>TIE</h3></a>
                        <p>A full stack (MERN) web app designed for coaches to log in and create/edit rosters and inventory lists for their teams.  A time-saving, user-friendly UI with custom aesthetic visuals.</p>
                        <p><span>BUILT WITH: </span>all skills listed</p>
                    </div>
                    <div className="project">
                        <a href="#"><h3>Criddle's Cafe Website</h3></a>
                        <p>A soon to be deployed interactive business website created for a privately owned restaurant.</p>
                        <p><span>BUILT WITH: </span>JavaScript, React JS, Axios, Git, Express, MongoDB, Node.js, HTML 5, CSS Grid, Illustrator, SVG and SVG animations</p> 
                    </div>
                    <div className="project">
                        <a href="http://sketched.surge.sh"><h3>Sketched</h3></a>
                        <p>SPA designed as a drawing game where users are given a chance to draw an original and creative scene including assigned randomized items. They can draw on an HTML canvas that I built into the app.</p>
                        <p><span>BUILT WITH: </span>JavaScript, React, Axios to call 3rd party API, Gifs from Giphy, HTML canvas in a React component</p> 
                    </div>
                    <div className="project">
                        <a href="http://periodictable.surge.sh"><h3>Periodic Table</h3></a>
                        <p>An interactive and aesthetically pleasing periodic table utilizing CSS grid and grid areas where the user can isolate elements to expand them and learn more.</p>
                        <p><span>BUILT WITH: </span>CSS grid, React, conditional rendering, JavaScript</p> 
                    </div>
                </div>
                <div className="resume-education">
                    <div className="section-top">
                        <FontAwesomeIcon icon={faUserGraduate} size="4x" color="grey"/>
                        <h2>Education</h2>
                    </div>
                    <div className="edu">
                        <a href="https://vschool.io"><h3>V School</h3></a>
                        <h4>2019</h4>  
                        <p>Full Stack (MERN) Web Developmnet Program</p>
                    </div>
                    <div className="edu">
                        <a href="https://weber.edu"><h3>Weber State University</h3></a>
                        <h4>2005 - 2009</h4>
                        <p>studied Foreign Language and Literature (Spanish), Chemistry</p>  
                    </div>
                </div>
                <div className="job-history">
                    <div className="section-top">
                        <FontAwesomeIcon icon={faBriefcase} size="4x" color="grey"/>
                        <h2>Job History</h2>
                    </div>
                    <div className="job">
                        <a href="https://bonneville.wsd.net"><h3>High School Football Coach for Weber School District</h3></a>
                        <br/>
                        <h4>2008 - Present</h4>
                        <br/>
                        <p>Defensive coordinator- I am the head of the defensive players and coaching staff, which requires that I demonstrate and maintain a sense of leadership. 
                        <br/>
                        <br/>
                        I compile large amounts of data from game film and analyze it using my own formulas in order to devise a defensive game plan. 
                        <br/>
                        <br/>
                        I implement effective teaching skills to translate and present my findings to players and coaches so that they understand and execute the game plan. 
                        <br/>
                        <br/>
                        I listen to players and coaches to ensure that our perspectives are all heard and understood and that we are a cohesive team.
                        </p>  
                    </div>
                    <br/>
                    <div className="job">
                        <a href="http://bellistonjewelry.com"><h3>Bench Jeweler/Jewelry Designer at Belliston Jewelry</h3></a>
                        <br/>
                        <h4>2005 - 2016</h4>
                        <br/>
                        <p>Managed and maintained the Repair Department where I completed an average of 10 repairs/day.
                        <br/>
                        <br/>
                        Designed and created custom jewelry from start to finish based on customer specifications (3/week).
                        </p>  
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Resume