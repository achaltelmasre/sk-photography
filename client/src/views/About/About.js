import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ReviewSlider from '../../components/ReviewSlider/ReviewSlider'
import Manu from '../../components/Menu/Menu'

import "./About.css"

function About () {

    return(
      <>
        <div>
         
              <Navbar/>

              <div class="container text-center">
  <div class="row">
    <div class="col-md-6">
     
     <h4 className='about-text1'>SK PHOTOGRAPHY</h4>

     <p>At SK Photography, based in the city of Bhandara in Maharashtra, we capture life’s most precious moments with creative flair. Specializing in cinematic wedding films, candid photography, and pre-wedding shoots, we transform your memories into timeless works of art.</p>

     <p>Our dedication to excellence has not gone unnoticed. We are proud to have received the Best Photography award, a testimony to our commitment to quality and innovation. With ten years of solid experience, our team of top photographers, talented production professionals, and skilled touch-up artists work tirelessly to bring your imagination to life.</p>

     <p>At SK Photography, every shot is a blend of passion and professionalism, ensuring that your special moments are captured beautifully and authentically. Join us and experience the magic of SK Photography – where every picture tells a story.</p>
      
    </div>
    <div class="col-md-6">
      
     <h4 className='about-text2'>PRINCIPLES OF OUR WORK </h4>

     <p className='about-font  border-bottom border-dark '><i class="bi bi-record"></i> Honesty and Trust</p>

     <p className='about-font border-bottom border-dark  '><i class="bi bi-record"></i> Quality Over Quantity</p>

     <p className='about-font'><i class="bi bi-record"></i> Cherishing Clients and Team</p>

    </div>
  </div>
  </div>
              
              <Manu/>
              <ReviewSlider/>
              <Footer/>
        </div>
      </>

    )
}
export default About