import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "./../Navbar/img/logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () =>
{ 
  
  return (
    <>

 <footer class="  text-lg-s bg-dark text-light text-center foot ">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="  top-text">
      <span>Get connected with  @Shubham Khamle</span>
    </div>
  
    <div class="icons">
      <a href="" class="me-4 text-reset">
      <i class="bi bi-facebook"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-envelope"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-telephone"></i>
      </a>
    </div>

  </section>

  <section class="">
    <div class="container text-md-start mt-5 ">
 
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
     
          <h6 class="text-uppercase fw-bold mb-4">
               <img src={logo} alt="logo" height="50px" />  <span className="text-red fs-4">PHOTOGRAPHY</span>
          </h6>
          <p>
              There is one thing the photograph must contain , the humanity of the moment.
          </p>
        
        </div>
     

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="./../" class="text-reset a">Wedding shoot</a>
          </p>
          <p>
            <a href="#!" class="text-reset a">Pre-wedding  shoot</a>
          </p>
          <p>
            <a href="#!" class="text-reset a">Birthday shoot</a>
          </p>
          <p>
            <a href="#!" class="text-reset a">other shoots</a>
          </p>
        </div>
  

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link  to="/" class="text-reset ">Instagram</Link>
          </p>
          <p>
            <Link  to="/about" class="text-reset a ">Facebook</Link>
          </p>
          <p>
            <Link to="/order" class="text-reset">Twitter</Link>
          </p>
          <p>
            <Link to="/Review" class="text-reset">Email</Link>
          </p>
          <p>
            <Link to="/contact" class="text-reset">Contact</Link>
          </p>
        </div>

     
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Bhandara , 441904</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            shubhamkhamle@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91 9588698095</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
      
    </div>
  </section>
  

  <div class="text-center p-4" >
   made with ❤️
    <a class="text-reset fw-bold " href="https://mdbootstrap.com/">achaltelmasre@gmail.com</a>
  </div>
  
</footer> 

    </>
  );
}
export default  Footer;