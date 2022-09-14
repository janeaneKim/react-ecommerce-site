import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ProductCard from "../pages/ProductCard.js";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  let [productList, setProductList] = React.useState([
    {
      id: 1,
      link: "NeoRhythm",
      title: "NeoRhythm",
      image: (
        <img
          className="product-card"
          src="https://omnipemf.com/wp-content/uploads/2022/02/NeoRhytm_9x9.png"
          alt="NeoRhythm"
        />
      ),
      price: <div className="Neo">$299.99</div>,
    },
    {
      id: 2,
      link: "NeoWrap",
      title: "NeoWrap",
      image: (
        <img
          className="product-card"
          src="https://omnipemf.com/wp-content/uploads/2022/03/wrap.pngholder.js/100px180"
          alt="NeoWrap"
        />
      ),
      price: <div className="Neo2">$49.00</div>,
    },
    {
      id: 3,
      link: "HardDriveDock",
      title: "Hard Drive Dock",
      image: (
        <img
          className="HardDriveDock product-card"
          src="/Images/HardDriveDock.jpg"
          alt="Hard Drive Dock"
        />
      ),
      price: <div className="HardDriveDock">$25.99</div>,
    },
    {
      id: 4,
      link: "StreamDeck",
      title: "Elegato Stream Deck",
      image: (
        <img
          className="StreamDeck product-card"
          src="/Images/StreamDeck.jpg"
          alt="Stream Deck"
        />
      ),
      price: <div className="HardDriveDock">$151.48</div>,
    },
    {
      id: 5,
      link: "keychron_k8_keyboard",
      title: "Keychron K8 Keyboard",
      image: (
        <Image
          className="product-card"
          variant="top"
          src="../Images/Keychron.webp"
          fluid={true}
        />
      ),
      price: <div>$100.00</div>,
    },
    {
      id: 6,
      link: "va88m_sakura_keyboard",
      title: "Varmillo Sakura Edition Keyboard",
      image: (
        <Image
          className="product-card"
          variant="top"
          src="../Images/SakuraKeyboard.jpg"
          fluid={true}
        />
      ),
      price: <div>$150.00</div>,
    },
  ]);

  let productArray = productList.map((product) => (
    <ProductCard key={product.id} info={product} />
  ));

  return (
    <>
      <>
        <Navbar />
        <section className="section">
          <Outlet />
        </section>

        <div className="card">
          <div className="card-header">Partners in Code</div> 
          <div className="card-body">
            <h5 className="card-title">
              Welcome to our site! Please choose from a variety of different
              products.
            </h5>
            <p className="card-text"></p>
          </div>
        </div>
        
        <Container fluid>
        <Carousel variant="dark">
          <Carousel.Item>
              <Image fluid
                className="Neo3"
                src="../Images/Neo5.jpg"
                alt="First slide"
              />{" "}
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/NeoWrap">
              <Image fluid
                className="Neo3"
                src="../Images/Wrap1.webp"
                alt="Second slide"
              />{" "}
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/keychron_k8_keyboard">
              <Image fluid
                className="Neo3"
                src="../Images/Keychron2.webp"
                alt="Third slide"
              />{" "}
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/va88m_sakura_keyboard">
              <Image fluid
                className="Neo3"
                src="../Images/VA88.jpg"
                alt="Fourth slide"
              />{" "}
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/HardDriveDock">
              <Image fluid
                className="Neo3"
                src="../Images/HardDriveDock.jpg"
                alt="Fifth slide"
              />{" "}
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/StreamDeck">
              <Image fluid
                className="Neo3"
                src="../Images/StreamDeck2.jpg"
                alt="Sixth slide"
              />
            </Link>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>
      </>

      <Container fluid="xl">
        <Row>
          <Col md>{productArray[0]}</Col>
          <Col md>{productArray[1]}</Col>
          <Col md>{productArray[2]}</Col>
        </Row>
        <br />

        <Row>
          <Col md>{productArray[3]}</Col>
          <Col md>{productArray[4]}</Col>
          <Col md>{productArray[5]}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
