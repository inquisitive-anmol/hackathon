
import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import Header from './components/layout/Header';
import Home from './components/Home/home';
import Doctor from './components/Doctor/Doctor';
import Contact from './components/contact/Contact';
import AboutUs from './components/aboutus/AboutUs';



const App = () => {

  
useEffect(() => {
  webFont.load({
    google: {
      families: ["Poppins", "Nunito", "Roboto"],
    },
  });


}, []);
  return (
    <div>
       <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App



