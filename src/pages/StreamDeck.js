import React from "react";
import '../Janeane.css';
import Navbar from "../components/Navbar"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

function StreamDeck(){
return (
    <div>
        <Navbar />
        <Container className="container">
            <Row>
                <Col>
                    <h2>Elegato Stream Deck</h2>
                    <p>$149.99</p>
                    <br/>
                    <p>
                        Gone are the days of navigating myriad windows to trigger an action, 
                        and relying solely on automated plugins to expand your production value. 
                        Now, you hold the power to pioneer a new era of content creation, and lead 
                        your audience to uncharted frontiers of inspiration. Now, you’re in control.  
                    </p>
                    <form method="post" action="">
                        <div>
                            <label for="quantity" >Quantity: </label>
                            <input type="number" placeholder="1" min="1" max="5"></input>
                            <br/>
                            <Button variant="success" size="md" type="submit" value="Submit" id="submit">Add to Cart</Button>
                        </div>
                    </form>
                </Col>

                <Col>
                    <img src="../Images/StreamDeck2.jpg" alt="StreamDeck" style={{maxHeight:"100%", maxWidth:"100%"}}></img>
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
          <td>118 x 84 x 21 mm / 4.6 x 3.3 x 0.8 in</td>
        </tr>
        <tr>
          <td>Keys</td>
          <td>15 x customizable LCD keys</td>
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
          <td>Weight (kg)</td>
          <td>190</td>
        </tr>
      </tbody>
    </Table>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default StreamDeck;