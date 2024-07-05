import "./Booking.css";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <>
    <div className="booking">
      <div className="content">
      <h2 className="text-center p-2 pt-5 booking-text1 ">Booking Now Our Events </h2>
        <p className="p-2 text-center text-danger h4"> "A photographs is an opportunity 
            <br/> to keep a moment forever"</p>
      <div class="container ">
        <div class="row">
            <p className="fw-5 text-center booking-text2">It just demo offer, If any information for booking purpose just contact <b> @Shubhamkhamle </b>
            <Link to="/contact"><button type="button"  class=" btn btn-danger m-2">Click Here 👇</button></Link>
            </p>
          <div class="col-md-4 ">
            <div className=" m-3 border col1">
              <h5 className="text-center p-2 ">Platinum Wedding Package</h5>
             
              <ul className="booking-text">
              <p className="fw-bold text-start">Description:</p>
                <li>10 hours of coverage</li>
                <li>2 photographers</li>
                <li>300 edited digital photos</li>
                <li>Online gallery for sharing</li>
              </ul>
             
              <ul className="booking-text">
              <p className="fw-bold text-start">Additional Services:</p>
                <li>Additional Hours: extra charges</li>
                <li>Travel Fees: (if applicable)</li>
              </ul>
            </div>
          </div>

          <div class="col-md-4">
            <div className=" m-3 border col1">
              <h5 className="text-center p-2 ">Gold Corporate Package</h5>
            
              <ul className="booking-text">
              <p className="fw-bold text-start">Description:</p>
                <li>8 hours of coverage </li>
                <li>1 photographer</li>
                <li>200 edited digital photos </li>
                <li>On-site photo booth</li>
              </ul>
         
              <ul className="booking-text">
              <p className="fw-bold text-start">Additional Services:</p>
                <li>Additional Hours: extra charges</li>
                <li>Travel Fees: (if applicable)</li>
              </ul>
            </div>
          </div>

          <div class="col-md-4">
            <div className=" m-3 border col1">
              <h5 className="text-center p-2">Silver Family Package</h5>
           
              <ul className="booking-text">
              <p className="fw-bold text-start">Description:</p>
                <li>2 hours of coverage</li>
                <li>1 photographer</li>
                <li>50 edited digital photos</li>
                <li>Outdoor or studio session</li>
                
              </ul>
         
              <ul className="booking-text">
              <p className="fw-bold text-start">Additional Services:</p>
                <li>Additional Hours: extra charges</li>
                <li>Travel Fees: (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
       
       
      
      </div>
    </>
  );
}
export default Booking;
