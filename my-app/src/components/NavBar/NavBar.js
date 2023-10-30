import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Hoyo-commerce</h3>
            </Link>
            <div className="Categories">
               <NavLink to={`/category/auriculares`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Auriculares</NavLink>
               <NavLink to={`/category/ropa`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ropa</NavLink>
                <NavLink to={`/category/figuras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Figuras</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar