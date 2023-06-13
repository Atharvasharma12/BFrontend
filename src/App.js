import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
