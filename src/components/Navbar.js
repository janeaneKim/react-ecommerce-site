import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav class='navbar'>
            <Link to= '/'>Home</Link>
            <Link to='/NeoRhythm'>NeoRhythm </Link>
            <Link to='/NeoWrap'>NeoWrap</Link>
            
         </nav>
    )
}
export default Navbar