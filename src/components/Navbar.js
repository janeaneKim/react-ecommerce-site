/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import '../App.css';
const Navbar = () => {
    return (
        <nav className='navbar'>
         
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand">
                    </a>
                        
                    <Link className="navigate" to= '/'>Home</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link">
                        <Link className="navigate" to='/NeoRhythm'>NeoRhythm </Link>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                    <Link className="navigate" to='/NeoWrap'>NeoWrap</Link>
                    </a>
            

                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Disabled</a>
                </li>
                </ul>
            </div>
                    </nav>
         
          
            
        </nav>

 
    )
}



export default Navbar