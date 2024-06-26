import React, { useState } from 'react'
import Navbar from './../../components/Navbar/Navbar.js'
import Footer from './../../components/Footer/Footer.js'
import axios from 'axios'

import "./Contact.css"

function Contact () {

   const [name, setName] =  useState("");
   const [ phone_number, setPhone_number] =  useState("");
   const [email, setEmail] =  useState("");
   const [date, setDate] = useState("");
   const [events, setEvents] =  useState("");
   const [city_venue, setCity_venue] =  useState("");
   const [ expected_guests, setExpected_guests] =  useState("");
   const [special_requirements, setSpecial_requirements] =  useState("");
   const [ how_did_you_find_us, setHow_did_you_find_us] =  useState("");
  

   const sendEnquiry = async () => {
      if (!name || !phone_number || !email || !date|| !events || !city_venue || !expected_guests || !how_did_you_find_us) {
         alert("Please fill all fields");
         return;
       }

       const response = await axios.post("/api/events", {
         name: name,
         phone_number: phone_number,
         email: email,
         events : events,
         city_venue : city_venue,
         expected_guests: expected_guests,
         special_requirements: special_requirements,
         how_did_you_find_us: how_did_you_find_us

       });
       if (response?.data?.success) {
         alert(response?.data?.message);
         
       }else {
         alert("Failed to submit the review. Please try again.");
       }
   };

    return(
        <>
           <div>
             <Navbar/>
                
                <div className='contact-container text-center font1'>
                <h2 className='contact-name'>Contact Us</h2>

                  <h4 className='font'>Bhandara , 441904 </h4>
                  <p>Check out our location</p>
                  <hr/>
                   <h4 className='font' >+91-95886-98095</h4>
                   <p>Questions? Call Us</p>
                   <hr/>
                   <h4 className='font'>shubhamkhamle@gmail.com</h4>
                   <p>contact by email</p>
                   <hr/>
                   <h4 className='font'>Mon to Sun - 11:00 to 9:00</h4>
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
                  <input placeholder='Enter your name ' className='width'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  </div>
                  
                   <div className='flex'>
                   <div  className='me-5'>
                    <label>Phone No. :</label>
                    <input placeholder='Enter your number'className='flex-width' 
                        value={phone_number}
                        onChange={(e) => setPhone_number(e.target.value)}
                    />
                     </div>               
                  
                  <div className=' '>
                  <label>Email : </label>
                  <input placeholder='Enter your email' className='flex-width'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
                   </div>

                    
                  
               <div className='flex'>
               <div className='  me-5'>
                  <label>Date :</label>
                   <input type='date'className='flex-width'
                       value={date}
                       onChange={(e) => setDate(e.target.value)} 
                   />
                  </div>
                   
                   <div className=''>
                   <label>Events :</label>
                   <input type='text' placeholder='Enter ypur events' className='flex-width'
                    value={events}
                    onChange={(e) => setEvents(e.target.value)}
                   />
                   </div>
               </div>
                
                 <div>
                 <label>City/venu :</label>
                 <input type='text' placeholder='exter your city and venu' className='width'
                    value={city_venue}
                    onChange={(e) => setCity_venue(e.target.value)}
                 />
                 </div>
                  
                     <div>
                     <label>Number of Guests Expected </label>
                     <input type='text'placeholder='expected guests' className='width'
                        value={expected_guests}
                        onChange={(e) => setExpected_guests(e.target.value)}
                     />
                     </div>
                   
                  <div>
                  <label>Any special requirements or anything you want to mention? </label>
                  <input type='text' placeholder='enter your requirements ' className='width'
                     value={special_requirements}
                     onChange={(e) => setSpecial_requirements(e.target.value)}
                  />
                  </div>
                   
             
           <div>
      <label>How Did You Find Us?</label>
      <input type='text'placeholder='find us on' className='width'
          value={how_did_you_find_us}
          onChange={(e) => setHow_did_you_find_us(e.target.value)}
      />
      </div>
                   
                   
                   <button type="button" class="contact-btn mt-5 mb-5"
                     onClick={sendEnquiry}
                   > Send</button>

                </div>

             <Footer/>

           </div>
        </>
    )
}
export default  Contact