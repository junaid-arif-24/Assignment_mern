import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import  Shop  from "./pages/shop/Shop";
import  Login  from "./pages/login/Login";
import  Users  from "./pages/Users/Users";
import  OrderPlaced  from "./pages/OrderPlaced/OrderPlaced";
import  Cart  from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<OrderPlaced />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;