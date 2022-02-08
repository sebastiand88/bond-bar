import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
import "./App.css";
import CocktailMenu from "./components/CocktailMenu/CocktailMenu";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <CocktailMenu />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
