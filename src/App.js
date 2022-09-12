import Home from './pages/Home';
import LeviApp from './pages/LeviApp';
import LeviApp2 from './pages/LeviApp2';
import Error from './pages/Error';
import Sakura from './pages/Sakura';
import Keychron from './pages/Keychron';
import './App.css';
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
            <Route path="va88m_sakura_keyboard" element={<Sakura />}/> 
            <Route path="keychron_k8_keyboard" element={<Keychron />}/> 
          </Routes>
          <footer></footer>
        </Router>
  );
}


export default App




  






