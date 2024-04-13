import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Navbar />

        <div className="back-img">
          
          <div className="head-div ">
            <h1 className="mb-3">Welcome....</h1>
          <h1 className="display-4 head-name" >SK PHOTOGRAPHY</h1>
          <p className="text-light fs-5 ">I take photographs with creativity, concept and passion .</p>
          <p className="text-light">I'm  freelance photographer specializing in people & portrait photography, based in Bhandara. 
            Photography is my passion and i love to turn ideas into beautiful things.
            Looking for a caring , fun , passionate and creative photographer? It's me!
          </p>
          </div>
          
        <div className="slide">
        <Slider />
        </div>
      
        </div>

        <Footer/>
       
      </div>
    </>
  );
}

export default Home;
