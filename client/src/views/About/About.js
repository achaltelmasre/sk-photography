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
              <Manu/>
              <ReviewSlider/>
              <Footer/>
        </div>
      </>

    )
}
export default About