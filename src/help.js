import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Help() {
    return(
      <Container  style={{maxHeight: 550, overflow: "scroll"}}>
        <h1>Tutorial</h1>
        <hr/>
        <p>
          Use the sliders to create intresting shapes.
          It can be quite satisfying but it's completely useless. 
          But damn is it pretty.
        </p>
        <hr/>
        <h3>Important</h3>
        <hr/>
        <p>
          <b>Draw</b>(Shortcut - SHIFT) -- this controls wether the lines are being drawn or not. Holding shift toggles it.<br/>
          <b>Reset</b>(Shortcut - ctrl ) -- this resets the canvas does not reset the arms, because why would it. <br/>
        </p>
        <h3>Set and Forget</h3>
        <hr/>
        <p>
          <b>Master Speed</b> -- Controls the amount which the arms move per frame, works well for small speed changes. 
          If set too high will cause jagged lines.<br/>
          <b>Times per Second</b> -- Controls how many calculations are preformed per second. Works for speed changes 
          If set too high will cause blurring.<br/>
          <b>Scale</b> -- Affects the lengths of all of the arms in a set ratio. If too big arms will be off screen, 
          recommended to be kept low.<br/>
        </p>
        <hr/>
        <h3>Aesthetics</h3>
        <hr/>
        <p>
          <b>Color</b> -- What Color will the drawn lines be?<br/>
          <b>Thickness</b> -- How thick will the drawn lines be?<br/>
        </p>
        <hr/>
        <h3>Shape Controls</h3>
        <hr/>
        <p>
          <b>Number of Arms</b> -- Controls amount of arm.<br/>
          <b>Length</b> -- Controls length of arm. Can be used to change the extent
           to which an arm has effect on the overall shape<br/>
          <b>Speed</b> -- Controls the speed of the arms. If two Arms have the same speed they will have the same angle.<br/>
        </p>
        <br/><br/><br/>
  
      </Container>
    )
  }