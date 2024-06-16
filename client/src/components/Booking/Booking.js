import "./Booking.css";

function Booking() {
  return (
    <>
    <div>
        <h2 className="text-center">Booking Now Our Events </h2>
        <p className="p-2 text-center"> "A photographs is an opportunity 
            <br/> to keep a moment forever"</p>
      <div class="container text-center">
        <div class="row">
            <p>It just demo offer , any information for booking purpose just contact @Shubhamkhamle
            <button type="button" to="/conatct" class="btn btn-outline-danger">Danger</button>
            </p>
          <div class="col-md-4">
            <div className="p-2 m-3">
              <h4>Platinum Wedding Package</h4>
              <p className="fw-bold">Description:</p>
              <ul>
                <li>10 hours of coverage</li>
                <li>2 photographers</li>
                <li>300 edited digital photos</li>
                <li>Online gallery for sharing</li>
              </ul>
              <p className="fw-bold">Additional Services:</p>
              <ul>
                <li>Additional Hours: extra charges</li>
                <li>Travel Fees: (if applicable)</li>
              </ul>
            </div>
          </div>

          <div class="col-md-4">
            <div className="p-2 m-3">
              <h4>Gold Corporate Package</h4>
              <p className="fw-bold">Description:</p>
              <ul>
                <li>8 hours of coverage </li>
                <li>1 photographer</li>
                <li>200 edited digital photos </li>
                <li>On-site photo booth</li>
              </ul>
              <p className="fw-bold">Additional Services:</p>
              <ul>
                <li>Additional Hours: extra charges</li>
                <li>Travel Fees: (if applicable)</li>
              </ul>
            </div>
          </div>

          <div class="col-md-4">
            <div className="p-2 m-3">
              <h4>Silver Family Package</h4>
              <p className="fw-bold">Description:</p>
              <ul>
                <li>2 hours of coverage</li>
                <li>1 photographer</li>
                <li>50 edited digital photos</li>
                <li>Outdoor or studio session</li>
                <li>1 printed photo album</li>
              </ul>
              <p className="fw-bold">Additional Services:</p>
              <ul>
                <li>Additional Hours: extra charges</li>
                <li>Travel Fees: (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Booking;
