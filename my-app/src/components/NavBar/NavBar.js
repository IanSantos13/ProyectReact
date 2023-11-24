import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Hoyo-commerce</h3>
            </Link>
            <ul className="Categories" >
                <li>
               <NavLink to="/category/Auriculares">Auriculares</NavLink>
                </li>
                <li>
               <NavLink to="/category/Ropa" >Ropa</NavLink>
                </li>
                <li>
                <NavLink to="/category/Figuras" >Figuras</NavLink>
                </li>
            </ul>
            <Link to="/cart">
            <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar