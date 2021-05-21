import React from 'react';
import './App.css';
import p5 from 'p5';

class Code extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let cnv
    var graphics
    let angle = 0;

    let prevx = 0
    let prevy = 0
    let hg = 550
    p.setup = () => {
      cnv = p.createCanvas(p.windowWidth / 2, p.windowHeight / 2);
      graphics = p.createGraphics(p.windowWidth / 2, hg);
      graphics.translate(graphics.width / 2 - 10, graphics.height / 2 - 10)
      p.resizeCanvas(document.getElementById('parent').offsetWidth, hg)
    }

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth / 2 - 10, p.windowHeight - 10);
      graphics = p.createGraphics(p.windowWidth / 2 - 10, p.windowHeight - 10);

      graphics.translate(p.width / 2 - 10, p.height / 2 - 10)
    }
    p.draw = () => {
      if (p.keyIsDown(p.CONTROL)) {
        graphics = p.createGraphics(p.windowWidth / 2 - 10, p.windowHeight - 10);
        graphics.translate(p.width / 2 - 10, p.height / 2 - 10);
      }
      p.background(155)
      p.strokeWeight(10)
      p.image(graphics, 0, 0)

      graphics.strokeWeight(this.props.data.thiccness)

      let scale = this.props.data.scale
      p.translate(p.width / 2 - 10, p.height / 2 - 10);
      for (let n = 0; n < this.props.data.perframe; n++) {
        let previousPos = [0, 0];
        let endx
        let endy

        for (let i = 0; i < this.props.data.arms; i++) {
          let bruh_angle = angle * this.props.data["speed" + i]
          let v = p5.Vector.fromAngle(bruh_angle);

          endx = previousPos[0] + v.x * this.props.data["length" + i] * scale
          endy = previousPos[1] + v.y * this.props.data["length" + i] * scale
          p.line(previousPos[0], previousPos[1], endx, endy);
          previousPos = [endx, endy];
        }
        graphics.fill(155);
        graphics.stroke(p.color(this.props.color));
        if ((this.props.data.draw || p.keyIsDown(p.SHIFT)) &&
          !(this.props.data.draw && p.keyIsDown(p.SHIFT))) {
          graphics.line(prevx, prevy, endx, endy)
        }
        angle += 0.005 * this.props.data.masterSpeed
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
export default Code;