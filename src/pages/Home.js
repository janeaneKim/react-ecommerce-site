import { Link, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import SakuraKeyboard from '../Images/SakuraKeyboard.jpg';
import Keychron from '../Images/Keychron.webp'
import ProductCard from '../pages/ProductCard.js';

const Home = () => {
    let NeoRhythm = {
        link: "NeoRhythm",
        title: "NeoRhythm",
        image: ( <img class="NeoRhythm" src="https://omnipemf.com/wp-content/uploads/2022/02/NeoRhytm_9x9.png" alt="NeoRhythm" />),
        price: (<div class="Neo">$299.99</div>)
    }

    let NeoWrap = {
        link: "NeoWrap",
        title: "NeoWrap",
        image: (<img class= "NeoWrap" src="https://omnipemf.com/wp-content/uploads/2022/03/wrap.pngholder.js/100px180" alt="NeoWrap" /> ),
        price: (<div class= "Neo2">$49.00</div> )
    }

    let k8 ={
        link: "NeoWrap",
        title: "NeoWrap",
        image: (<img class= "NeoWrap" src="https://omnipemf.com/wp-content/uploads/2022/03/wrap.pngholder.js/100px180" alt="NeoWrap" /> ),
        price: (<div class= "Neo2">$49.00</div> )
    }

    let HardDriveDock = {
        title: "Hard Drive Dock",
        image: (<img class="HardDriveDock" src="./images/HardDriveDock.jpg" alt="Hard Drive Dock" /> ),
        price: (<div class="HardDriveDock">$25.99</div>)
    }

    return (
        <><>
            <Navbar />
            <section className='section'>
                <Outlet />
            </section>
        
        </><Container fluid ="xl">
                <Row>
                    <Col>
                        <ProductCard  info={NeoRhythm}/>
                    </Col>
                    <Col>
                        <ProductCard info={NeoWrap} />
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <br />

                <Row >
                    <Col>
                        <Card >
                            <Card.Img className="NeoRhythm" variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Link to="keychron_k8_keyboard" style={{ color:"black", textDecoration: 'none' }} >
                            <Image className="product-card" variant="top" src={Keychron} fluid={true} />
                            <br/>
                            <Card.Body>
                                <Card.Title>Keychron K8 Keyboard</Card.Title>
                                <Card.Text>
                                    $100.00
                                </Card.Text>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Link to="va88m_sakura_keyboard" style={{ color:"black", textDecoration: 'none' }} >
                            <Image className="product-card" variant="top" src={SakuraKeyboard} fluid={true}/>
                            <br/>
                            <Card.Body>
                                <Card.Title>Varmillo Sakura Edition Keyboard</Card.Title>
                                <Card.Text>
                                    $150.00
                                </Card.Text>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container></>



    );
};

export default Home;