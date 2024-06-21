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

                <div>
                   <h2>Enquiry form</h2>
                   <p>Will be GLAD to be a part of your SPECIAL DAY</p>

                   <label>Your Name : </label>
                   <input placeholder='Enter your name '></input>
                    <br/>                
                   <lable>Phone No. : </lable>
                   <input placeholder='Enter your number'></input>

                   <label>Email : </label>
                   <input placeholder='Enter your email'></input>
                   <br/>
                   <lable>Date : </lable>
                   <input type='date'></input>

                   <lable>Events : </lable>
                   <input type='text' placeholder='Enter ypur events'></input>
                   <br/>
                   <lable>City/venu</lable>
                   <input type='text' placeholder='exter your city and venu'></input>
                   <br />
                   <lable>Number of Guests Expected </lable>
                   <input type='text'></input>
                   <br/>
                   <label>Any special requirements or anything you want to mention?
                   </label>
                   <input type='text' placeholder='enter your requirements '></input>
                   <br />
                   <lable>How Did You Find Us? </lable>
                   <input type='text'></input>
                  
                   <button type="button" class="btn btn-secondary">Secondary</button>

                </div>

             <Footer/>

           </div>
        </>
    )
}
export default  Contact