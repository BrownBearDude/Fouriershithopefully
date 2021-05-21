import React, {useState} from 'react';
import './index.css';
import './styles.css';
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Code from './P5Code';

export default function App() {
  const [color, setColor] = useState("#000000");
  const { register, watch } = useForm({
    revalidateMode: 'onchange',
    defaultValues : {
      arms : 2,
      masterSpeed : 0,
      perframe : 5
    }
  });
  

  const formValues = watch();
  const final = [];

  for (let i = 0; i < formValues.arms; i++) {
    final.push(
      <Card key={i}>
            <b>Arm {i+1}</b>
            <br/>
          <Form.Group>
              <Form.Label>{"Length: "+formValues['length'+i]}</Form.Label>
              <Form.Control type="range" min="1" max="100"  {...register("length"+i, { required: true })} defaultValue="2"></Form.Control>
          </Form.Group>
          <Form.Group>
              <Form.Label>{"speed: "+formValues['speed'+i]}</Form.Label>
              <Form.Control type="range" min="-10" max="10" step="0.5"  {...register('speed'+i, { required: true })} defaultValue="0"></Form.Control>
          </Form.Group>
        </Card> 
    );
  }

  return(
    <Row>
      <Col>
        <Code data={formValues} color={color}></Code>
      </Col>
      <Col style={{maxHeight: 550, overflow: "auto"}}>
      <Container>
        <Form >
        <Form.Group>
            <Button id="reset" name="reset"> Reset</Button>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="draw">Draw</Form.Label>
            <Form.Check id="draw" defaultValue={false} {...register('draw', { required: true })}></Form.Check>
          </Form.Group>
          <hr/>
          <Form.Group>
            <Form.Label>{"Master Speed: "+formValues.masterSpeed}</Form.Label>
            <Form.Control type="range" min="-5" max="5" step="0.05"  defaultValue="0" {...register('masterSpeed', { required: true })}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>{"Scale: "+formValues.scale}</Form.Label>
            <Form.Control type="range" min="0.05" max="20" defaultValue="1" step="0.25" {...register('scale', { required: true })} ></Form.Control>
            <Form.Text>keep value low</Form.Text>
          </Form.Group>
          <div>
            <HexColorPicker color={color} onChange={setColor} />
            <HexColorInput color={color} onChange={setColor} />
          </div>
          <Form.Group>
            <Form.Label>thickness</Form.Label>
            <Form.Control type="number" min="1" max="50" defaultValue="2" {...register('thiccness', { required: true })} ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>times per frame</Form.Label>
            <Form.Control type="number" min="1" max="50" defaultValue="2" {...register('perframe', { required: true })} ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of arms</Form.Label>
            <Form.Control type="number" min="1" max="50" defaultValue="2" {...register('arms', { required: true })} ></Form.Control>
          </Form.Group>
          <hr/>
          {final}
        </Form>
      </Container>
      <br/>
      </Col>
    </Row>
  )
}