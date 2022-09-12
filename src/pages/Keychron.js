import React from "react";
import '../Janeane.css';
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

function Keychron(){
return (
    <div>
        <Navbar />
        <Container className="container">
            <Row>
                <Col>
                    <h2>Keychron K8 Keyboard</h2>
                    <p>$100.00</p>
                    <br/>
                    <ul>
                        <li>Keychron K8 ia a versatile tenkeyless wireless mechanical keyboard.</li>
                        <li>The fast and precise Keychron Optical switches (co-engineered with LK) with ultra low latency is the best option for hardcore gamers looking for millisecond reaction times.</li>
                        <li>Connect the K8 through the latest Bluetooth 5.1 with up to 3 devices and switch among them easily.</li>
                        <li>The K8 is suitable for home, office and light gaming use with the Gateron Mechanical red, blue, or brown switch options.</li>
                    </ul>
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
                    <img src="../Images/Keychron.webp" alt="keychron"></img>
                </Col>
            </Row>
            <br/>

            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>K8</th>
                                <th>Features</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>Layout</td>
                                    <td>Tenkeyless</td>
                                </tr>
                                <tr>
                                    <td>Keys</td>
                                    <td>87</td>
                                </tr>
                                <tr>
                                    <td>Compatible Systems</td>
                                    <td>Mac/iOS/Windows/Android</td>
                                </tr>
                                <tr>
                                    <td>Connectivity</td>
                                    <td>Wireless/Wired</td>
                                </tr>
                                <tr>
                                    <td>Battery Capacity (mAh)</td>
                                    <td>4000</td>
                                </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </div>

)
}

export default Keychron;