import React from 'react';
import './App.css';
import './globals.js'
import "p5/lib/addons/p5.sound";
import p5 from "p5";
import QwertyHancock from 'qwerty-hancock';


class KeyBoardNath extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef();
    }
  
    

    Sketch = (p) => {
        let keyboard

        let t1 = 0.1; // attack time in seconds
        let l1 = 0.7; // attack level 0.0 to 1.0
        let t2 = 0.3; // decay time in seconds
        let l2 = 1;

        let octaves = 5
        p.windowResized = () => {
            keyboard.width = p.windowWidth
            keyboard.height = p.windowHeight/2
        }
        p.setup = () => {
            keyboard = new QwertyHancock({
                id: 'keyboard',
                width: p.windowWidth,
                height: p.windowHeight/2,
                octaves: octaves,
                startNote: 'c2',
                whiteNotesColour: 'white',
                blackNotesColour: 'black',
                hoverColour: '#030c73',
                keyOctave: 4
           });

           
            let notes = {}
            keyboard.keyDown = function (bruh, frequency) {
                let note = new p5.Oscillator();
                let env = new p5.Envelope(t1, l1, t2, l2);
                note.setType('sawtooth')
                note.amp(0.1)
                note.freq(frequency)
                note.start()
                env.triggerAttack(note)
                notes[frequency] = {note: note, env: env}
            }
            keyboard.keyUp = function (note, frequency) {
                if (notes[frequency]) {
                    notes[frequency].env.triggerRelease(notes[frequency].note)
                    notes[frequency].note.stop()
                    delete notes[frequency]
                }
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