import { createContext, useState } from "react"

export const cartContext = createContext()

const { Provider } = cartContext

function CartContextProvider({children}){
    const [cart, setCart] = useState([2,4,5,{key:"valuer"}])

    const addToCart = (stock, initial, onAdd)=>{
        setCart([...cart, stock, initial, onAdd])
    }

    return(
        <Provider value={{cart, addToCart}}>
            {children}
        </Provider>
    )
}

export default CartContextProvider