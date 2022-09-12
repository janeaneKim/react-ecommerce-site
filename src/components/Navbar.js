/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import '../App.css';
const Navbar = () => {
    return (
        <nav class='navbar'>
         
                    <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <a class="navbar-brand">
                    </a>
                        
                    <Link class="navigate" to= '/'>Home</Link>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link">
                        <Link class="navigate" to='/NeoRhythm'>NeoRhythm </Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                    <Link class="navigate" to='/NeoWrap'>NeoWrap</Link>
                    </a>
            

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Disabled</a>
                </li>
                </ul>
            </div>
                    </nav>
         
          
            
        </nav>

 
    )
}



export default Navbar