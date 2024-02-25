import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems}  />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
