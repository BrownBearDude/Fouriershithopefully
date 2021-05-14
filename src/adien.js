import React from 'react';
import './App.css';
import './globals.js'
import "p5/lib/addons/p5.sound";
import p5 from "p5";

class KeyBoard extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef();
    }

    Sketch = p => {
        let cnv
        let b
        p.setup = () => {
            cnv = p.createCanvas(p.windowWidth, p.windowHeight-10);
            b = new buttonF(100, 100, 100, 100)
        }
        p.draw = () => {
            p.background(255)
            p.noFill()

            let buttonsize = 200
            let xoffset = p.windowWidth-700
            let yoffset = 20
            for (let i = 0; i < 3; i++) {
                p.rect(i*buttonsize+xoffset, 0+yoffset, buttonsize, buttonsize)
            }
            b.draw()
            b.checkpress(p.mouseX, p.mouseY)
            let note = [false, false, false]
            for (var i = 0; i < p.touches.length; i++) {
                for (let n = 0; n < 3; n++) {
                    if (p.touches[i].x > n*buttonsize+xoffset &&
                        p.touches[i].x < n*buttonsize+buttonsize+xoffset &&
                        p.touches[i].y < yoffset+buttonsize &&
                        p.touches[i].y > yoffset) {
                        p.fill(255,0,0)
                        p.rect(n*buttonsize+xoffset, 0+yoffset, buttonsize, buttonsize) 

                        note[n] = true
                        break
                    }
                }
            }

        }

        class buttonF {
            constructor(x, y, width, height) {
                this.x = x
                this.y = y
                this.width = width
                this.height = height
            }
            draw() {
                p.rect(this.x, this.y, this.width, this.height)
            }
            checkpress(x, y) {
                if (x > this.x && x < this.width+this.x &&
                    y < this.y && y > this.height+this.y) {
                    p.fill(255,0,0)
                    p.rect(this.x, this.y, this.width, this.height)
                    return true
                }
                return false
            }
        }

        p.KeyBoardmousePressed = () => {
            return false;
        }
        document.addEventListener('gesturestart', function(e) {
            e.preventDefault();
        });  
    }
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    } 
    
    render() {
    return (
        <div>
            <div id="keyboard"></div>
            <div id="parent" ref={this.myRef}></div>
        </div>
    )
    }
}
export default KeyBoard;