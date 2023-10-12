import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Hoyo-commerce</h3>
            <div>
                <button>Ropa</button>
                <button>Adornos</button>
                <button>Figuras</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar