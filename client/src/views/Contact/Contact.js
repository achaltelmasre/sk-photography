import Navbar from './../../components/Navbar/Navbar.js'
import Footer from './../../components/Footer/Footer.js'

import "./Contact.css"

function Contact () {

    return(
        <>
           <div>
             <Navbar/>
                
                <div className='contact-container text-center font'>
                <h2 className='contact-name'>Contact Us</h2>

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
                    <i class="bi bi-facebook icon"></i>
                    <i class="bi bi-whatsapp icon"></i>
                    <i class="bi bi-instagram icon"></i>
                    <i class="bi bi-twitter icon"></i>

                </div>

                <div className='contact-container '>
                   <h2 className='enquiry-name'>Enquiry form</h2>
                   <p className='text-center conatact-text'>Will be GLAD to be a part of your SPECIAL DAY</p>

                  <div>
                  <label>Your Name : </label>
                  <input placeholder='Enter your name ' className='width'></input>
                  </div>
                  
                   <div className='flex'>
                   <div  className='me-5'>
                    <label>Phone No. :</label>
                    <input placeholder='Enter your number'className='flex-width' ></input>
                     </div>               
                  
                  <div className=' '>
                  <label>Email : </label>
                  <input placeholder='Enter your email' className='flex-width'></input>
                  </div>
                   </div>

                    
                  
               <div className='flex'>
               <div className='  me-5'>
                  <label>Date :</label>
                   <input type='date'className='flex-width' ></input>
                  </div>
                   
                   <div className=''>
                   <label>Events :</label>
                   <input type='text' placeholder='Enter ypur events' className='flex-width'></input>
                   </div>
               </div>
                
                 <div>
                 <label>City/venu :</label>
                 <input type='text' placeholder='exter your city and venu' className='width'></input>
                 </div>
                  
                     <div>
                     <label>Number of Guests Expected </label>
                     <input type='text'placeholder='expected guests' className='width'></input>
                     </div>
                   
                  <div>
                  <label>Any special requirements or anything you want to mention? </label>
                  <input type='text' placeholder='enter your requirements ' className='width'></input>
                  </div>
                   
             
           <div>
      <label>How Did You Find Us?</label>
      <input type='text'placeholder='find us on' className='width'></input>
      </div>
                   
                   
                   <button type="button" class="contact-btn mt-5 mb-5"> Send</button>

                </div>

             <Footer/>

           </div>
        </>
    )
}
export default  Contact