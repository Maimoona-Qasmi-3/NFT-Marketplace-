import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";
import Item from "./Item";
<<<<<<< HEAD

function App() {

  const NFTID = "rrkah-fqaaa-aaaaa-aaaaq-cai";

  return (
    <div className="App">
      <Header />
      <Item id={NFTID}/>
=======
import { Principal } from "@dfinity/principal";

function App() {

  return (
    <div className="App">
      <Header />
      <Item id="rrkah-fqaaa-aaaaa-aaaaq-cai"/>
>>>>>>> e5e3e7fe2cdb0723117c6e5ec907705981ca72ad
      {/* <img className="bottom-space" src={homeImage} /> */}
      <Footer />
    </div>
  );
}

export default App;
