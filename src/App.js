import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
