import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path ="/cart" element={<Cart/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
