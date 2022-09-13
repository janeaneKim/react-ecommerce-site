import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ProductCard from '../pages/ProductCard.js';

const Home = () => {
    let [productList, setProductList] = React.useState([
        {
            id: 1,
            link: "NeoRhythm",
            title: "NeoRhythm",
            image: ( <img class="product-card" src="https://omnipemf.com/wp-content/uploads/2022/02/NeoRhytm_9x9.png" alt="NeoRhythm" />),
            price: (<div class="Neo">$299.99</div>)
        },
        {
            id: 2,
            link: "NeoWrap",
            title: "NeoWrap",
            image: (<img class= "product-card" src="https://omnipemf.com/wp-content/uploads/2022/03/wrap.pngholder.js/100px180" alt="NeoWrap" /> ),
            price: (<div class= "Neo2">$49.00</div> )
        }, 
        {
            id: 3,
            link: "HardDriveDock",
            title: "Hard Drive Dock",
            image: (<img class="HardDriveDock product-card" src="/Images/HardDriveDock.jpg" alt="Hard Drive Dock" /> ),
            price: (<div class="HardDriveDock">$25.99</div>)
        }, 
        {
            id: 4,
            link: "StreamDeck",
            title: "Elegato Stream Deck",
            image: (<img class="StreamDeck product-card" src="/Images/StreamDeck.jpg" alt="Stream Deck" /> ),
            price: (<div class="HardDriveDock">$151.48</div>)
        }, 
        {
            id: 5,
            link: "keychron_k8_keyboard",
            title: "Keychron K8 Keyboard",
            image: ( <Image className="product-card" variant="top" src="../Images/Keychron.webp" fluid={true} /> ),
            price: (<div>$100.00</div> )
        }, 
        {
            id: 6,
            link: "va88m_sakura_keyboard",
            title: "Varmillo Sakura Edition Keyboard",
            image: ( <Image className="product-card" variant="top" src="../Images/SakuraKeyboard.jpg" fluid={true}/> ),
            price: (<div>$150.00</div> )
        }
    ]);

    let productArray = productList.map((product) => 
            <ProductCard key={product.id} info={product} />
    )

    return (
        <><>
            <Navbar />
            <section className='section'>
                <Outlet />
            </section>
        
        </><Container fluid ="xl">
                <Row>
                    <Col md>
                        {productArray[0]}
                    </Col>
                    <Col md>
                        {productArray[1]}   
                    </Col>
                    <Col md>
                        {productArray[2]}
                    </Col>
                </Row>
                <br />

                <Row >
                    <Col md>
                        {productArray[3]}
                    </Col>
                    <Col md>
                        {productArray[4]}
                    </Col>
                    <Col md>
                        {productArray[5]}
                    </Col>
                </Row>
            </Container></>



    );
};

export default Home;