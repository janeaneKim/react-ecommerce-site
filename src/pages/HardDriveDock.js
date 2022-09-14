import React from "react";
import '../Janeane.css';
import Navbar from "../components/Navbar"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

function HardDriveDock(){
return (
    <div>
        <Navbar />
        <Container className="container">
            <Row>
                <Col>
                    <h2>Hard Drive Dock</h2>
                    <p>$25.99</p>
                    <br/>
                        <p>
                            VWavlink USB 3.0 to SATA I/II/II Dual Bay External Hard Drive Docking Station for 2.5" 3.5" SATA 
                            HDD/SSD Enclosure 2x 16TB Hard Drive Enclosure With UASP, Support Offline Clone Duplicator, 
                            Auto Sleep
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
                    <img src="../Images/HardDriveDock.jpg" alt="sakura-keyboard" style={{maxHeight:"100%", maxWidth:"100%"}}></img>
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
          <td>Dual bay, fit for 2.5" / 3.5" HDD / SSD</td>
        </tr>
        <tr>
          <td>Supports</td>
          <td>Supports SATA I/II/III</td>
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
          <td>Output</td>
          <td>USB 3.0</td>
        </tr>
      </tbody>
    </Table>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default HardDriveDock;