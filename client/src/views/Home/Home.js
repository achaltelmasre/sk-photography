import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="slide">
        <Slider />
        </div>
       

      </div>
    </>
  );
}

export default Home;
