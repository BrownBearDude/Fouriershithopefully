import React from 'react';
import './App.css';
import p5 from 'p5';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  
  


  Sketch = (p) => {
    let cnv
    var graphics
    let angle = 0
    let members;

    let prevx = 0
    let prevy = 0

    

    p.setup = () => {
      p.frameRate(1000)
      cnv = p.createCanvas(p.width, p.height);
      graphics = p.createGraphics(document.getElementById('parent').offsetWidth, 600);
      graphics.background(200)
      members = [
        {length: 100, color: 20, speed: 10},
        {length:  100, color: 10, speed: - 11}
      ]
      p.resizeCanvas(document.getElementById('parent').offsetWidth, 600)
    }
    
    p.windowResized = () => {
      p.resizeCanvas(document.getElementById('parent').offsetWidth, 600)
    }
    

    p.draw = () => {
      p.background(155)
      p.strokeWeight(10)
      p.image(graphics, 0, 0)
      

      for (let n = 0; n < 5; n++) {
        let previous_pos = [p.width/2, p.height/2];
        let endx
        let endy
  
        for (let i = 0; i < this.props.data.arms; i ++) {
          let bruh_angle = angle*this.props.data["speed"+i]
          let v = p5.Vector.fromAngle(bruh_angle);
          endx = previous_pos[0]+v.x*this.props.data["length"+i]
          endy = previous_pos[1]+v.y*this.props.data["length"+i]
          p.line(previous_pos[0], previous_pos[1], endx, endy);
          previous_pos = [endx, endy];
        }
        
        graphics.fill(155);
        graphics.stroke(0);
        if (this.props.data.draw) {
          graphics.line(prevx, prevy, endx, endy)
        }
        angle += 0.005 * this.props.data.masterSpeed/2
        prevx = endx 
        prevy = endy
      }
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

export default App;