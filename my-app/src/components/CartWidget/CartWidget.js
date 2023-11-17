import { useContext } from "react"
import { cartContext } from "../Context/CartContext"

const CartWidget = () => {
    const {cart} = useContext(cartContext)
    return (
        <div>
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget