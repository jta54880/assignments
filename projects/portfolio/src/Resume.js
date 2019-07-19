import React from "react"

const Resume = () => {
    return (
        <div className="resume-page-container">
            <h1>Resume</h1>
            <div className="resume-container">
                <div className="resume-top">
                    <h1 className="name">Jake Afuvai</h1>
                    <h3>801-317-5095</h3> | <h3>jtafuvai@gmail.com</h3>
                    <a href="http://jta.surge.sh"><h3>jta.surge.sh</h3></a>
                    |
                    <a href="https://github.com/JakeAfuvai"><h3>github.com/JakeAfuvai</h3></a>
                    |
                    <a href="https://linkedin.com/in/jake-afuvai"><h3>linkedin.com/in/jake-afuvai</h3></a>
                </div>
                <div className="resume-summary">
                    <h2>Who am I?</h2>
                    <p>I am a newly graduated, dedicated web developer with fresh and expanding knowledge of new technology. I am looking forward to a career where I can continue passionately learning and creating. I am humbled by the rate of change and magnitude of technology and its advancements, but am confident in my ability to learn new skills quickly and effectively.</p>
                </div>
                <div className="resume-skills">
                    <h2>Skills</h2>
{/* JavaScript / ES6, React JS, HTML 5 / Canvas, CSS 3, Grid / Flexbox, Adobe Illustrator, SVG / SVG animations, Axios, CRUD principles, Node.js, Express, MongoDB, JSON Web Tokens, Google Sheets, Microsoft Excel */}
                </div>
                <div className="resume-projects">
                    <h2>Projects</h2>
                    {/* TIE- A full stack (MERN) web app designed for coaches to log in and create/edit rosters and inventory lists for their teams.  A time-saving, user-friendly UI with custom aesthetic visuals.
Built with: all skills listed above
Criddle’s Cafe- A soon to be deployed interactive business website created for a privately owned restaurant. 
Built with: JavaScript, React JS, Axios, Git, Express, MongoDB, Node.js, HTML 5, CSS Grid, Illustrator, SVG and SVG animations
Sketched- SPA designed as a drawing game where users are given a chance to draw an original and creative scene including assigned randomized items. They can draw on an HTML canvas that I built into the app.
Built with: JavaScript, React, Axios to call 3rd party API, Gifs from Giphy, HTML canvas in a React component
Periodic Table- An interactive periodic table utilizing CSS grid and grid areas where the user can isolate elements to expand them and learn more.
Built with: CSS grid, React, conditional rendering, JavaScript */}
                </div>
                <div className="resume-education">
                    <h2>Education</h2>
                    {/* V School Full Stack Web Development 2019
Weber State University 2005-2009 (studied Foreign Language and Literature (Spanish), Chemistry) */}
                </div>
                <div className="job-history">
                    <h2>Job History</h2>
                    {/* High School Football Coach for Weber School District 		2008-present
Defensive coordinator- I am the head of the defensive players and coaching staff, which requires that I demonstrate and maintain a sense of leadership. 
I compile large amounts of data from game film and analyze it using my own formulas in order to devise a defensive game plan. 
I implement effective teaching skills to translate and present my findings to players and coaches so that they understand and execute the game plan. 
I listen to players and coaches to ensure that our perspectives are all heard and understood and that we are a cohesive team.

Bench Jeweler/Jewelry Designer at Belliston Jewelry 		2005-2016
Managed and maintained the Repair Department where I completed an average of 10 repairs/day. 
Designed and created custom jewelry from start to finish based on customer specifications (3/week).  */}
                </div>
            </div>
        </div>    
    )
}

export default Resume