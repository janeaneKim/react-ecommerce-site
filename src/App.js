/* eslint-disable jsx-a11y/anchor-is-valid */
import Home from './pages/Home';
import Navbar from './components/Navbar';
import LeviApp from './pages/LeviApp';
import LeviApp2 from './pages/LeviApp2'
import Error from './pages/Error';
import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Link, Outlet} from 'react-router-dom';
import { MDBContainer, MDBFooter,MDBCol,MDBRow,MDBIcon } from "mdb-react-ui-kit";


function App  ()  {
  return (
 
        <><Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="NeoRhythm" element={<LeviApp />} />
        <Route path="NeoWrap" element={<LeviApp2 />} />
        <Route path="*" element={<Error />} />
        <Route />
      </Routes>
    </Router><MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>"Ecommerce isn't the cherry on the cake, it's the new cake."</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Company name?
                </h6>
                <p>
                 Welcome to our site! Please choose from a variety of different products
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    NeoRhythm
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    NeoWrap
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Add product
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Add Product
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Chicago, IL 666, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  dontemailus@norefunds.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022 Copyright:
          <a className='text-reset fw-bold' href='http://localhost:3000/'>
            Whatever you guys want to call this
          </a>
        </div>
      </MDBFooter></>
  );
}

 

export default App




  






