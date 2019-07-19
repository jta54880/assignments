import React from "react"
import { withData } from "./DataProvider.js"
import { Link } from "react-router-dom"

class Canvas extends React.Component {
    constructor() {
        super()
        this.state = {
            mode: "draw",
            brush: "up",
            brushXY: [],
            lineWidth: 10,
            brushColor: "black",
            finishCharacter: false,
            finishLocation: false,
            finishActivity: false
        }
    }

    componentDidMount = () => {
        this.clearCanvas()
        window.scrollTo(0,0)
    }

    draw = () => {
        this.setState({
            mode: "draw"
        })
    }

    erase = () => {
        this.setState({
            mode: "erase",
        })
    }

    drawing = (e) => {
        const { offsetX, offsetY } = e.nativeEvent

        if(this.state.brush === "down") {

            this.ctx.beginPath()
            this.ctx.lineWidth = this.state.lineWidth
            this.ctx.lineCap = "round"


            if(this.state.mode === "draw") {
                this.ctx.strokeStyle = this.state.brushColor
            }

            if(this.state.mode === "erase") {
                this.ctx.strokeStyle = '#ffffff'
            }

            this.ctx.moveTo(this.state.brushXY[0], this.state.brushXY[1]) 
            this.ctx.lineTo(offsetX, offsetY) 
            this.ctx.stroke()
            
            this.setState({  
                brushXY: [offsetX, offsetY]
            })
        }
    }

    brushDown = (e) => { 
        const { offsetX, offsetY } = e.nativeEvent
        this.setState({
            brush: "down",
            brushXY: [offsetX, offsetY]
        })
    }

    brushUp = () => { 
        this.setState({
            brush: "up"
        })
    }

    brushSizeUp = () => {
        this.setState(prevState => ({ lineWidth: prevState.lineWidth + 5}))
    }

    brushSizeDown = () => {
        this.setState(prevState => (prevState.lineWidth - 5 <= 0 ? 
            { lineWidth: 1 }
            :
            { lineWidth: prevState.lineWidth - 5}))
    }

    setBrushColor = (color) => {
        this.setState({
            brushColor : color
        })
    }

    clearCanvas = () => { 
        this.setState({
            mode: "draw",
            brush : "up",
            lineWidth : 10,
            brushColor : "black",
            finishCharacter: false,
            finishLocation: false,
            finishActivity: false
        })

        this.props.closeTopics()

        this.ctx = this.refs.canvas.getContext('2d')
        this.ctx.fillStyle= "white"
        this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
        this.ctx.lineWidth = 10
    }

    handleChange = (e) => {
        const { name } = e.target
        this.setState(prevState => ({[name]: !prevState[name]}))
    }

    saveCanvas = sketch => {
        this.props.saveSketch(sketch)
        this.clearCanvas()
        this.setState({ finishCharacter: false, finishLocation: false, finishActivity: false })
        this.props.closeTopics()
    }

    render() {
        const modalShowClass = this.props.showModal ? "display-block" : "display-none"
        const topicsShowClass = this.props.showTopics ? "topics" : "display-none"
        const styleDivOne = this.state.finishCharacter ? 
            {background: "#66FF66", border: "solid 1pt black", width: "50pt", height: "20pt", transition: "0.4s"} : {background: "none", border: "solid 1pt black", width: "50pt", height: "20pt", transition: "0.4s"}
        const styleDivTwo = this.state.finishLocation ? 
            {background: "#66FF66", border: "solid 1pt black", width: "50pt", height: "20pt", margin: "0 3pt", transition: "0.4s"} : {background: "none", border: "solid 1pt black", width: "50pt", height: "20pt", margin: "0 3pt", transition: "0.4s"}
        const styleDivThree = this.state.finishActivity ? 
            {background: "#66FF66", border: "solid 1pt black", width: "50pt", height: "20pt", transition: "0.4s"} : {background: "none", border: "solid 1pt black", width: "50pt", height: "20pt", transition: "0.4s"}
        const canvas = this.refs.canvas
        return (
            <div className="body canvas-container">
                <div className="canvas-header">
                    <h1>Canvas</h1>
                    {this.props.character !== "" && 
                        <>
                        {!this.props.showTopics ? <button className="topic-btns" onClick={this.props.openTopics}>Show My Topics</button> : <button className="topic-btns" onClick={this.props.closeTopics}>Close Topics</button>}
                        <p>Sketch Status</p>
                        <div className="status-bar">
                            <div style={styleDivOne}></div>
                            <div style={styleDivTwo}></div>
                            <div style={styleDivThree}></div>
                            {this.state.finishCharacter && this.state.finishLocation && this.state.finishActivity && 
                                <button 
                                    className="save-btn" 
                                    style={{fontSize: "1.5em", marginLeft: "5pt"}}
                                    onClick={() => this.saveCanvas(canvas.toDataURL())}
                                >Save Image
                                </button>}
                        </div>
                        </>
                    }
                    {this.props.character !== "" &&
                        <div className={topicsShowClass}>
                            <div className="canvas-topic-container">
                                {this.state.finishCharacter ? 
                                    <h3 style={{textDecoration: "line-through", textDecorationStyle: "wavy", textDecorationColor: "lightblue", color: "#FAAFAA", transition: "0.45s"}} className="topic-header">Character- {this.props.character}
                                    </h3> 
                                    : 
                                    <h3 style={{transition: "0.45s"}} className="topic-header">Character- {this.props.character}</h3>
                                }
                                <input type="checkbox" name="finishCharacter" checked={this.state.finishCharacter} onChange={this.handleChange}/>
                            </div>
                            
                            <div className="canvas-topic-container">
                                {this.state.finishLocation ? 
                                    <h3 style={{textDecoration: "line-through", textDecorationStyle: "wavy", textDecorationColor: "lightblue", color: "#FAAFAA", transition: "0.45s"}} className="topic-header">Location- {this.props.place}
                                    </h3> 
                                    : 
                                    <h3 style={{transition: "0.45s"}} className="topic-header">Location- {this.props.place}</h3>
                                }
                                <input type="checkbox" name="finishLocation" checked={this.state.finishLocation} onChange={this.handleChange}/>
                            </div>
                            
                            <div className="canvas-topic-container">
                                {this.state.finishActivity ? 
                                    <h3 style={{textDecoration: "line-through", textDecorationStyle: "wavy", textDecorationColor: "lightblue", color: "#FAAFAA", transition: "0.45s"}} className="topic-header">Activity- {this.props.activity}
                                    </h3> 
                                    : 
                                    <h3 style={{transition: "0.45s"}} className="topic-header">Activity- {this.props.activity}</h3>
                                }
                                <input type="checkbox" name="finishActivity" checked={this.state.finishActivity} onChange={this.handleChange}/>
                            </div>
                            
                        </div>
                    }
                    <button className="modal-btn" onClick={this.props.openModal}>Get Inspired</button>
                </div>
                <canvas 
                    id="canvas"
                    ref="canvas"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={(e) => this.brushDown(e)} 
                    onMouseMove={(e) => this.drawing(e)}
                    onMouseUp={(e) => this.brushUp(e)}>
                </canvas>
                <div className="tools-btns">
                    <button
                        className="tool-btn" 
                        style={this.state.mode === "draw" ? {background: "black", color: "white", borderRadius: "3pt", transition: "0.5s"} : null}
                        onClick={this.draw} 
                    >{this.state.mode === "draw" ? "Draw Selected" : "Select Draw"}
                    </button>
                    <button
                        className="tool-btn" 
                        style={this.state.mode === "erase" ? {background: "black", color: "white", borderRadius: "3pt", transition: "0.5s"} : null}
                        onClick={this.erase} 
                    >{this.state.mode === "erase" ? "Erase Selected" : "Select Erase"}</button>
                    <button 
                        className="tool-btn"
                        onClick={this.brushSizeUp} 
                    >+ Brush Size + ({this.state.lineWidth}pt)</button>
                    <button 
                        className="tool-btn"
                        onClick={this.brushSizeDown} 
                    >- Brush Size - ({this.state.lineWidth}pt)</button>
                    <button 
                        className="tool-btn"
                        onClick={this.clearCanvas} 
                    >Clear Canvas</button>
                </div>
                <hr/>
                <div className="colored-btns">
                    <button 
                        style={this.state.brushColor === "red" ? {background: "red", color: "white", borderRadius: "3pt", transition: "0.5s"} : {color: "red", transition: "0.5s"}}
                        className="canvas-btn btn-red"
                        onClick={() => this.setBrushColor("red")}
                    >Red</button>
                    <button 
                        style={this.state.brushColor === "orange" ? {background: "orange", color: "white", borderRadius: "3pt", transition: "0.5s"} : {color: "orange", transition: "0.5s"}}
                        onClick={() => this.setBrushColor("orange")}
                        className="canvas-btn btn-orange"
                    >Orange</button>
                    <button 
                        style={this.state.brushColor === "yellow" ? {background: "yellow", color: "#333", borderRadius: "3pt", transition: "0.5s"} : {color: "yellow", transition: "0.5s"}}
                        onClick={() => this.setBrushColor("yellow")}
                        className="canvas-btn btn-yellow"
                    >Yellow</button>
                    <button 
                        style={this.state.brushColor === "green" ? {background: "green", color: "white", borderRadius: "3pt", transition: "0.5s"} : {color: "green", transition: "0.5s"}}
                        onClick={() => this.setBrushColor("green")}
                        className="canvas-btn btn-green"
                    >Green</button>
                    <button 
                        style={this.state.brushColor === "blue" ? {background: "blue", color: "white", borderRadius: "3pt", transition: "0.5s"} : {color: "blue", transition: "0.5s"}}
                        onClick={() => this.setBrushColor("blue")}
                        className="canvas-btn btn-blue"
                    >Blue</button>
                    <button 
                        style={this.state.brushColor === "purple" ? {background: "purple", color: "white", borderRadius: "3pt", transition: "0.5s"} : {color: "purple", transition: "0.5s"}}
                        onClick={() => this.setBrushColor("purple")}
                        className="canvas-btn btn-purple"
                    >Purple</button>
                    <button 
                        style={this.state.brushColor === "black" ? {background: "black", color: "white", borderRadius: "3pt", transition: "0.5s"} : null}
                        onClick={() => this.setBrushColor("black")}
                        className="canvas-btn btn-black"
                    >Black</button>
                </div>
                
                <div className={`get-inspired-container modal ${modalShowClass}`}>
                    <section className="modal-main">
                        <button className="modal-btn" onClick={this.props.closeModal}>X</button>
                        {this.props.character !== "" ? 
                            <div style={{width: "100%", height: "100%"}}>
                                <div style={{backgroundImage: `url(${this.props.characterGif.url})`, backgroundPosition: "center", backgroundSize: "contain", marginBottom: "5pt", backgroundRepeat: "no-repeat", height: "40vh", width: "100%"}}></div>
                                <div style={{backgroundImage: `url(${this.props.locationGif.url})`, backgroundPosition: "center", backgroundSize: "contain", marginBottom: "5pt", backgroundRepeat: "no-repeat", height: "40vh", width: "100%"}}></div>
                                <div style={{backgroundImage: `url(${this.props.activityGif.url})`, backgroundPosition: "center", backgroundSize: "contain", marginBottom: "5pt", backgroundRepeat: "no-repeat", height: "40vh", width: "100%"}}></div>
                            </div>
                            :
                            <p style={{margin: "0 10pt"}}>Submit Character Form to Get Inspired (click '<Link to="/play_sketched" onClick={this.props.closeModal}>Play Sketched</Link>' to get random topics or go to the Menu for more options)</p>
                        }
                    </section>
                </div>
            </div>
        )
    }
}

export default withData(Canvas)