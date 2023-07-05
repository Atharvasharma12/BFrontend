import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import About from "./Components/About";
import AllProducts from "./Components/AllProducts";
import Account from "./Components/Account";
import CreateAccount from "./Components/CreateAccount";
import Protected from "./Components/Protected";
import Sell from "./Components/Sell";
import SelectedProduct from "./Components/SelectedProduct";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let userCookie = Cookies.get("jwt");

    if (userCookie == undefined) {
      userCookie = "no user found";
      dispatch({
        type: "setCookie",
        payload: userCookie,
      });
    } else {
      dispatch({
        type: "setCookie",
        payload: userCookie,
      });
      let decodedToken = decodeToken(userCookie);
      dispatch({
        type: "setLoggedInUser",
        payload: decodedToken,
      });
    }
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="About" element={<About />} />
        <Route path="Allproducts" element={<AllProducts />} />
        <Route path="Account" element={<Protected Component={Account} />} />
        <Route path="Sell" element={<Protected Component={Sell} />} />
        <Route path="SelectedProduct" element={<SelectedProduct />} />
      </Routes>
    </>
  );
}

export default App;

