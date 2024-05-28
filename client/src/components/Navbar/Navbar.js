import "./Navbar.css";
import logo from "./img/logo.png"
import { Link } from "react-router-dom";


 const Navbar = ()=>

{ 
  return (
    <nav class="navbar navbar-expand-lg fs-4 nav1  ">
  <div class="container-fluid ">
    <a class="navbar-brand ms-2" href="#"> <img src={logo} alt="logo" height="60px"/> <span className="fs-4 text-red  mt-1"> Photography</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse back-remo " id="navbarNav">
      <ul class="navbar-nav mx-lg-auto">
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover text-light " aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover text-light" aria-current="page" to="/about" >Photos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover text-light" aria-current="page" to="/review" >Reviews</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover text-light" aria-current="page" to="/contact" >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );

};
export default Navbar;