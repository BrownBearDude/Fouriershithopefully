import React from 'react';
import './App.css';
import p5 from 'p5';

class Puzzle extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let xdivides = 5
        let ydivides = 4
        let possibilities = []
        let board = []
        let img
        let cnv
        let graphics
        let highlight2
        let highlights
        let scale
        let zero
        p.preload = () => {
            img = p.loadImage('animebackground.jpg');
        }
        p.setup = () => {
            cnv = p.createCanvas(p.windowWidth, p.windowHeight - 10);
            graphics = p.createGraphics(p.windowWidth, p.windowHeight - 10)
            highlights = p.createGraphics(p.windowWidth, p.windowHeight - 10)
            highlight2 = p.createGraphics(p.windowWidth, p.windowHeight - 10)
            //
            //setup board state
            for (let i = 0; i < ydivides; i++) {
                for (let n = 0; n < xdivides; n++) {
                    possibilities.push("" + i + n)
                }
            }
            for (let i = 0; i < ydivides; i++) {
                board.push([])
                for (let n = 0; n < xdivides; n++) {
                    let random = randomInt(possibilities.length - 1)
                    board[i].push(possibilities[random])
                    possibilities.splice(random, 1)
                }
            }
            console.log(board)
            //
            scale = (p.windowWidth / img.width < (p.windowHeight - 20) / img.height ? p.windowWidth / img.width : (p.windowHeight - 20) / img.height);
            scale -= 0.01
            //
            drawboard()
        }
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight - 10);
            graphics = p.createGraphics(p.windowWidth, p.windowHeight - 10)
            highlights = p.createGraphics(p.windowWidth, p.windowHeight - 10)
            highlight2 = p.createGraphics(p.windowWidth, p.windowHeight - 10)
            scale = (p.windowWidth / img.width < (p.windowHeight - 50) / img.height ? p.windowWidth / img.width : (p.windowHeight - 50) / img.height);
            scale -= 0.01
            drawboard()
        }

        function drawboard() {
            p.background(155)
            for (let i = 0; i < ydivides; i++) {
                for (let n = 0; n < xdivides; n++) {
                    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
                    if (board[i][n] === "00") {
                        zero = [n, i]
                        graphics.fill(255, 0, 0)
                        graphics.rect(n * img.width / xdivides * scale, i * img.height / ydivides * scale,
                            img.width / xdivides * scale, img.height / ydivides * scale
                        )
                        //adjacent piece heightlighter
                        highlights.noFill()
                        highlights.stroke(0, 255, 0, 100)
                        highlights.strokeWeight(10)
                        highlight()
                    } else {
                        graphics.image(img, n * img.width / xdivides * scale, i * img.height / ydivides * scale,
                            img.width / xdivides * scale, img.height / ydivides * scale,
                            board[i][n][1] * img.width / xdivides, board[i][n][0] * img.height / ydivides,
                            img.width / xdivides, img.height / ydivides
                        )
                    }
                }
            }
            p.image(graphics, 0, 0)
            p.image(highlights, 0, 0)
        }

        function highlight() {
            highlights.clear()
            if (zero[1] !== 0) {
                highlights.rect(zero[0] * img.width / xdivides * scale, (zero[1] - 1) * img.height / ydivides * scale,
                    img.width / xdivides * scale, img.height / ydivides * scale
                )
            }
            if (zero[1] !== ydivides - 1) {
                highlights.rect(zero[0] * img.width / xdivides * scale, (zero[1] + 1) * img.height / ydivides * scale,
                    img.width / xdivides * scale, img.height / ydivides * scale
                )
            }
            if (zero[0] !== 0) {
                highlights.rect((zero[0] - 1) * img.width / xdivides * scale, (zero[1]) * img.height / ydivides * scale,
                    img.width / xdivides * scale, img.height / ydivides * scale
                )
            }
            if (zero[0] !== xdivides - 1) {
                highlights.rect((zero[0] + 1) * img.width / xdivides * scale, (zero[1]) * img.height / ydivides * scale,
                    img.width / xdivides * scale, img.height / ydivides * scale
                )
            }
        }

        p.keyPressed = () => {
            handle(p.keyCode)
        }

        p.mouseClicked = () => {
            if (p.mouseX > 0 && p.mouseX < img.width * scale &&
                p.mouseY > 0 && p.mouseY < img.height * scale) {
                    let clickpos = [Math.floor(p.mouseX / (img.width * scale / xdivides)), Math.floor(p.mouseY / (img.height * scale / ydivides))]
                    if (clickpos[0] == zero[0]-1 && clickpos[1] == zero[1]) {
                        handle(p.LEFT_ARROW)
                    }
                    else if (clickpos[0] == zero[0]+1 && clickpos[1] == zero[1]) {
                        handle(p.RIGHT_ARROW)
                    }
                    else if (clickpos[0] == zero[0] && clickpos[1] == zero[1]+1) {
                        handle(p.DOWN_ARROW)
                    }
                    else if (clickpos[0] == zero[0] && clickpos[1] == zero[1]-1) {
                        handle(p.UP_ARROW)
                    }
            
            }
        }


        function handle(input) {
            switch (input) {
                case p.LEFT_ARROW:
                    if (zero[0] === 0) { break }
                    board[zero[1]][zero[0]] = board[zero[1]][zero[0] - 1]
                    board[zero[1]][zero[0] - 1] = "00"
                    break;
                case p.RIGHT_ARROW:
                    if (zero[0] === xdivides - 1) { break }
                    board[zero[1]][zero[0]] = board[zero[1]][zero[0] + 1]
                    board[zero[1]][zero[0] + 1] = "00"
                    break;
                case p.UP_ARROW:
                    if (zero[1] === 0) { break }
                    board[zero[1]][zero[0]] = board[zero[1] - 1][zero[0]]
                    board[zero[1] - 1][zero[0]] = "00"
                    break;
                case p.DOWN_ARROW:
                    if (zero[1] === ydivides - 1) { break }
                    board[zero[1]][zero[0]] = board[zero[1] + 1][zero[0]]
                    board[zero[1] + 1][zero[0]] = "00"
                    break;
            }
            drawboard()
            console.log(board)
        }


        function randomInt(minimum, maximum) {
            if (maximum === undefined) {
                maximum = minimum;
                minimum = 0;
            }

            if (typeof minimum !== 'number' || typeof maximum !== 'number') {
                throw new TypeError('Expected all arguments to be numbers');
            }

            return Math.trunc(
                (Math.random() * (maximum - minimum + 1)) + minimum
            );

        }
    }
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div id="parent" ref={this.myRef}></div>
        )
    }
}
export default Puzzle;