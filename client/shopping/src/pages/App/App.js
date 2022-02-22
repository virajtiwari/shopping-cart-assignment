import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Header from "../../component/Common/Header";
import Products from "../Products";
import "./App.scss";
import Footer from "../../component/Common/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
