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

function App  ()  {
  return (
 
        <Router>
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="NeoRhythm" element={<LeviApp />} />
            <Route path="NeoWrap" element={<LeviApp2 />} />
            <Route path="*" element={<Error />} />
            <Route/>
          </Routes>
        </Router>
  );
}

 

export default App




  






