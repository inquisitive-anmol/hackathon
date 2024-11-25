import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import Header from "./components/layout/Header";
import VideoCall from "./components/video-call";

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
      {/* <Header /> */}
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      <Routes>
        <Route path="/call" element={<VideoCall />} />
      </Routes>
    </div>
  );
};

export default App;
