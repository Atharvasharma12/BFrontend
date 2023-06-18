import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import About from "./Components/About";
import AllProducts from "./Components/AllProducts";
import Account from "./Components/Account";
import CreateAccount from "./Components/CreateAccount";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="About" element={<About />} />
        <Route path="Allproducts" element={<AllProducts />} />
        <Route path="Account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
