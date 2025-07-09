import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Signup"; // This is your Signup page
import Login from "./components/Login";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Football from "./pages/Football";
import Basketball from "./pages/Basketball";
import Tennis from "./pages/Tennis";
import RunningShoes from "./pages/RunningShoes";
import Cricket from "./pages/Cricket";
import FitnessTraining from "./pages/FitnessTraining";

function App() {
  return (
    <Router>
      <Routes>
        {/* First page is Register (Signup) */}
        <Route path="/" element={<Register />} />

        {/* Login and Register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* After signup, you can navigate to home */}
        <Route path="/home" element={<Home />} />

        {/* Product and Shop Pages */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Information Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Categories */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/football" element={<Football />} />
        <Route path="/category/basketball" element={<Basketball />} />
        <Route path="/category/tennis" element={<Tennis />} />
        <Route path="/category/running-shoes" element={<RunningShoes />} />
        <Route path="/category/cricket" element={<Cricket />} />
        <Route path="/category/fitness-training" element={<FitnessTraining />} />

        {/* Fallback */}
        <Route path="*" element={<h2 style={{ textAlign: "center", padding: "2rem" }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
