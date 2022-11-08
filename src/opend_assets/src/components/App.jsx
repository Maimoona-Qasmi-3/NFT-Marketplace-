import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";
import Item from "./Item";
import { Principal } from "@dfinity/principal";

function App() {

  return (
    <div className="App">
      <Header />
      <Item id="rrkah-fqaaa-aaaaa-aaaaq-cai"/>
      {/* <img className="bottom-space" src={homeImage} /> */}
      <Footer />
    </div>
  );
}

export default App;
