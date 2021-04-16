import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Bruh() {
  const { register, watch } = useForm({
    revalidateMode: 'onchange',
    defaultValues: {
      draw: false,
      masterSpeed: "0",
      arms: "2"
    }
  });
  const formValues = (watch())

  const final = [];
  for (let i = 0; i<formValues.arms; i++) {
    final.push( 
      <Card key={i}>
        <Form.Group>
          <Form.Label>Length</Form.Label>
          <Form.Control type="range" min="0" max="100" name={"length"+i} ref={register({required: true})} defaultValue="2"></Form.Control>
          <Form.Label>Speed</Form.Label>
          <Form.Control type="range" min="-100" max="100" name={"speed"+i} ref={register({required: true})} defaultValue="0"></Form.Control>
        </Form.Group>
      </Card>
    );
  }

  
  return(
    <Row>
      <Col>
        <App data={formValues}></App>
      </Col>
      <Col xs={6}>
        <Form>
        <Form.Group>
            <Button name="reset"> Reset</Button>
          </Form.Group>
          <Form.Group>
            <Form.Check name="draw" ref={register({required: true})} defaultValue={false}></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>Master Speed</Form.Label>
            <Form.Control type="range" min="-3" max="3" name="masterSpeed" ref={register({required: true})} defaultValue="0"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of arms</Form.Label>
            <Form.Control type="number" min="1" max="50" name="arms" ref={register({required: true})} defaultValue="2"></Form.Control>
          </Form.Group>
          {final}

        </Form>
      </Col>
    </Row>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <Bruh />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
