import img1 from "./img/img2.jpg";
import img2 from "./img/img1.jpg";
import img3 from "./img/img3.jpg";
    import img4 from "./img/img4.jpg";
    import img5 from "./img/img5.jpg";
    import img6 from "./img/img6.jpg";
 import { Carousel } from "react-bootstrap";

import "./Slider.css"
const Slider = () =>
{
    return(
        <>
       
          <div className='design-project slider-img slider-img1 h-50% '>
            
            <Carousel interval={6000} >
                <Carousel.Item>
                    <img className=' slider1 ' src={img1} alt='First slide' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className=' slider1' src={img6} alt='Second slide' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className=' slider1 ' src={img2} alt='Third slide' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='slider1' src={img3} alt='Fourth slide' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className=' slider1' src={img4} alt='Fifth slide' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='slider1' src={img5} alt='Sixth slide' />
                </Carousel.Item>
               

            </Carousel>
        </div>
      
        </>
    )
};
 export default Slider;
