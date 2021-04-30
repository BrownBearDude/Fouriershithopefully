import React from 'react';
import './App.css';
import './globals.js'
import "p5/lib/addons/p5.sound";
import p5, { PolySynth, Oscillator } from "p5";
import QwertyHancock from 'qwerty-hancock';


class KeyBoardNath extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef();
    }
  
    

    Sketch = (p) => {
        let keyboard

        let env
        let oscs = {}

        let t1 = 0.1; // attack time in seconds
        let l1 = 0.7; // attack level 0.0 to 1.0
        let t2 = 0.3; // decay time in seconds
        let l2 = 0.1;

        p.setup = () => {
            keyboard = new QwertyHancock({
                id: 'keyboard',
                width: p.windowWidth,
                height: p.windowHeight,
                octaves: 3,
                startNote: 'A3',
                whiteNotesColour: 'white',
                blackNotesColour: 'black',
                hoverColour: '#03fc73'
           });

        env = new p5.Envelope(t1, l1, t2, l2);
        let nodes = []   
            keyboard.keyDown = function (note, frequency) {
                // console.log(frequency)
                let wave = new p5.Oscillator('sawtooth')
                wave.amp(0.1)
                wave.start()
                env.triggerAttack(wave);
                nodes.push(wave)
            };
            let new_nodes = []
            keyboard.keyUp = function (note, frequency) {
                console.log(nodes)
                for (let i = 0; i < nodes.length; i++) {
                    if (Math.round(nodes[i].f) === Math.round(frequency) ) {
                        nodes[i].stop()
                    } else { 
                        new_nodes.push(nodes[i])
                    }
                }
                nodes = new_nodes
                
            }
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
export default KeyBoardNath;