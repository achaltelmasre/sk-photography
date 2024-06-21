import Navbar from './../../components/Navbar/Navbar.js'
import Footer from './../../components/Footer/Footer.js'

import "./Contact.css"

function Contact () {

    return(
        <>
           <div>
             <Navbar/>
                
                <div>
                  <h2>Contact Us</h2>

                  <h4>Bhandara , 441904 </h4>
                  <p>Check out our location</p>
                  <hr/>
                   <h4>+91-95886-98095</h4>
                   <p>Questions? Call Us</p>
                   <hr/>
                   <h4>shubhamkhamle@gmail.com</h4>
                   <p>contact by email</p>
                   <hr/>
                   <h4>Mon to Sun - 11:00 to 9:00</h4>
                   <p>Our common business hours</p>
                   <br/>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-whatsapp"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>




                </div>

             <Footer/>

           </div>
        </>
    )
}
export default  Contact