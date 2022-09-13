/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import '../App.css';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">   
                <Link className="navigate" to= '/'>Home</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="navigate nav-link" to='/NeoRhythm'>NeoRhythm </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navigate nav-link" to='/NeoWrap'>NeoWrap</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="navigate nav-link" to='/keychron_k8_keyboard'>K8</Link>
                        </li>      
                        <li className="nav-item">
                                <Link className="navigate nav-link" to='/va88m_sakura_keyboard'>VA88M</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="navigate nav-link" to='/HardDriveDock'>Hard Drive Dock</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="navigate nav-link" to='/StreamDeck'>Stream Deck</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </nav>

 
    )
}



export default Navbar