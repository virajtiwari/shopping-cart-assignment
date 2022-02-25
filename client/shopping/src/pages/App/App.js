import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "../Home";
import Header from "../../component/Common/Header";
import Products from "../Products";
import Login from "../Login";
import Register from '../Register';
import Footer from "../../component/Common/Footer";
import CartCheckout from "../../component/Common/Cart/CartCheckout";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<CartCheckout />} />



        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
