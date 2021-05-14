import React from 'react';
import './App.css';
import p5 from 'p5';

class Code extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }
    Sketch = (p) => {
        let graphics;
        let cnv;
        p.setup = () => {
            cnv = p.createCanvas(p.windowWidth/2, p.windowHeight/2);
            graphics = p.createGraphics(p.windowWidth/2, hg);
            graphics.translate(graphics.width/2-10, graphics.height/2-10)
            p.resizeCanvas(document.getElementById('parent').offsetWidth, hg)
        }
        function make_look() {
            
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
export default Code;