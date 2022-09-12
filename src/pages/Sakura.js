import React from "react";
import '../Janeane.css';
import SakuraKeyboard from '../Images/SakuraKeyboard.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

function Sakura(){
return (
    <div>
        <Container className="container">
            <Row>
                <Col>
                    <h2>Varmilo Sakura Edition Keyboard</h2>
                    <p>$150.00</p>
                    <br/>
                    <ul>
                        <li>VA88M Special Edition Sakura Keyboard ISO layout with a decorated SpaceBar and pink colorway.</li>
                        <li>This keyboard somes with PBT keycaps and Cherry Switches.</li>
                        <li>Featuring 2x3x4mm LEDs that can be switched on/off.</li>
                        <li>Mac OS X compatible.</li>
                    </ul>
                    <form method="post" action="">
                        <div>
                            <label for="quantity" >Quantity: </label>
                            <input type="number" placeholder="1" min="1" max="5"></input>
                            <Button variant="success" size="md" type="submit" value="Submit" id="submit">Add to Cart</Button>
                        </div>
                    </form>
                </Col>

                <Col>
                    <img src={SakuraKeyboard} alt="sakura-keyboard" style={{maxHeight:"100%", maxWidth:"100%"}}></img>
                </Col>
            </Row>
            <br/>

            <Row>
                <Col>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>VA88M</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Size</td>
          <td>5.28" x 14.02" x 1.30"</td>
        </tr>
        <tr>
          <td>Layout</td>
          <td>ISO</td>
        </tr>
        <tr>
          <td>Windows Compatible</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Mac OS Compatible</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Weight (lbs)</td>
          <td>2.00</td>
        </tr>
      </tbody>
    </Table>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default Sakura;