import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import Header from './components/layout/Header';




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

        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App



