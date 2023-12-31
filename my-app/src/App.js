import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import { Checkout } from "./components/CheckOut/CheckOut";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
