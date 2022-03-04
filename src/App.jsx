import React from "react";
import { Routes, Route } from "react-router";


import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Carrusel from "./commons/Carrusel"
import SearchBar from "./components/SearchBar";



const App = () => {
  return (
    <>
      <body className="homepage is-preload">
        <div id="page-wrapper">
          <section id="header">
            <Logo />
            <Navbar />
            <SearchBar />
            <Banner />
          </section>
        </div>
      </body>
      <Routes>
        <Route path="movies_popular" element={<Carrusel />} />
      </Routes>
    </>
  );
};

export default App;
