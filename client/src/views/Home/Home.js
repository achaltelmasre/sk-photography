import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Navbar />

        <div className="back-img">
          
          <div className="head-div ">
          <h1 className="display-4 head-name" >SK PHOTOGRAPHY</h1>
          <p className="text-light ps-3">I take photographs with creativity, concept and passion</p>
          <a href="https://www.instagram.com/sk_photography7768/  " className="bg-light text-dark ps-4 pe-4 p-2 head-link" >See My Portfolio</a>
        
          </div>
          
        <div className="slide">
        <Slider />
        </div>
       
          
        </div>
       

      </div>
    </>
  );
}

export default Home;
