import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <Navbar />

        <div className="back-img">
          
          <div className="head-div ">
          <h1 className="display-4 head-name" >SK PHOTOGRAPHY</h1>
        
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
