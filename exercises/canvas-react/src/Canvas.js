import React from "react"
import { withData } from "./DataProvider.js"

class Canvas extends React.Component {
    constructor() {
        super()
        this.state = {
            mode: "draw",
            brush: "up",
            brushXY: [],
            lineWidth: 10,
            brushColor: "black",
        }
    }

    componentDidMount = () => {
        this.clearCanvas()
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

            this.ctx.moveTo(this.state.brushXY[0], this.state.brushXY[1]) //move to old position
            this.ctx.lineTo(offsetX, offsetY) //draw to new position
            this.ctx.stroke()
            
            this.setState({ //save new position 
                brushXY: [offsetX, offsetY]
            })
        }
    }

    brushDown = (e) => { //mouse is down on the canvas
        const { offsetX, offsetY } = e.nativeEvent
        this.setState({
            brush: "down",
            brushXY: [offsetX, offsetY]
        })
    }

    brushUp = () => { //mouse is up on the canvas
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

    clearCanvas = () => { //clears it to all white, resets state to original
        this.setState({
            mode: "draw",
            brush : "up",
            lineWidth : 10,
            brushColor : "black"
        })

        this.ctx = this.refs.canvas.getContext('2d')
        this.ctx.fillStyle= "white"
        this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
        this.ctx.lineWidth = 10
    }

    render() {
        return (
            <div className="body canvas-container">
                <h1 className="canvas-title">Canvas</h1>
                <canvas 
                    ref="canvas"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={(e)=>this.brushDown(e)} 
                    onMouseMove={(e)=>this.drawing(e)}
                    onMouseUp={(e)=>this.brushUp(e)}>
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
                    >Increase Brush Size (+ 5pt)</button>
                    <button 
                        className="tool-btn"
                        onClick={this.brushSizeDown} 
                    >Decrease Brush Size (- 5pt min: 1pt){this.state.lineWidth}</button>
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
            </div>
        )
    }
}

export default withData(Canvas)