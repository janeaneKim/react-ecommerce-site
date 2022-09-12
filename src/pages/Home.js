import { Link, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
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
        link: "keychron_k8_keyboard",
        title: "Keychron K8 Keyboard",
        image: ( <Image className="product-card" variant="top" src={Keychron} fluid={true} /> ),
        price: (<div>$100.00</div> )
    }

    let sakura ={
        link: "va88m_sakura_keyboard",
        title: "Varmillo Sakura Edition Keyboard",
        image: ( <Image className="product-card" variant="top" src={SakuraKeyboard} fluid={true}/> ),
        price: (<div>$150.00</div> )
    }

    let HardDriveDock = {
        link: "HardDriveDock",
        title: "Hard Drive Dock",
        image: (<img class="HardDriveDock" src="/Images/HardDriveDock.jpg" alt="Hard Drive Dock" /> ),
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
                        <ProductCard info={HardDriveDock} />
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
<<<<<<< HEAD
                        <ProductCard  info={k8}/>
=======
                        <Card >
                            <Link to="keychron_k8_keyboard" style={{ color:"black", textDecoration: 'none' }} >
                            <Image className="product-card" variant="top" src="/Images/Keychron.webp" fluid={true} />
                            <br/>
                            <Card.Body>
                                <Card.Title>Keychron K8 Keyboard</Card.Title>
                                <Card.Text>
                                    $100.00
                                </Card.Text>
                            </Card.Body>
                            </Link>
                        </Card>
>>>>>>> e20b5511b4a1ad77370b18b0ba7fbd7b2eb492b0
                    </Col>
                    <Col>
                        <ProductCard info={sakura} />
                    </Col>
                </Row>
            </Container></>



    );
};

export default Home;