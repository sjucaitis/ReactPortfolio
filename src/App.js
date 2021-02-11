import React from "react";
import Nav from "./components/Navbar";
import Heading from "./components/Jumbotron/Jumbotron";
import Cards from "./components/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  
    <div className="container">
      <Nav />
      <Heading />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
