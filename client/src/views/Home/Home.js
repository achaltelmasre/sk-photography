import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Booking from "../../components/Booking/Booking";
import "./Home.css";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import ImgSlider from "../../components/imgSlider/imgSlider";
// import Menu from "../../components/Menu/Menu";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div >
        <Navbar /> 

        <div className="back-img">
          <div className="slide">
            <Slider />

            <div className="head-div ">
              <h3 className="mb-3 welcome-name">Welcome....</h3>
              <h1 className=" head-name">SK PHOTOGRAPHY</h1>
              <p className="  home-text1 ">
                I take photographs with creativity, concept and passion.
              </p>
              <p className="text-dark home-text2">
                I'm freelance photographer specializing in people & portrait
                photography, based in Bhandara. Photography is my passion and i
                love to turn ideas into beautiful things. Looking for a caring ,
                fun , passionate and creative photographer? It's me!
              </p>
              <hr /> 
            </div>
          </div>
        </div>
              <div className="mt-3">
              <ImgSlider/>
              </div>
          <div className=" ">
            <Booking/>
          </div>

          <ReviewSlider/>
       <Footer /> 
      </div>
      
    </>
  );
}

export default Home;
