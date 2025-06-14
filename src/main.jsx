import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/HomePage.jsx";
import OurProject from "./pages/our-project";
import OurProduct from "./pages/our-product";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import DetailProduct from "./pages/detail-product";
import DetailProject from "./pages/detail-project";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="our-project" element={<OurProject />} />
      <Route path="our-product" element={<OurProduct />} />
      <Route path="detail-product" element={<DetailProduct />} />
      <Route path="detail-project" element={<DetailProject />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
