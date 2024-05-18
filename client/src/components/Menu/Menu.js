
import "./Menu.css"
import wedding from './img/wedding.jpg';
import engeage from './img/engage.jpg';
import mehendi from './img/mehndi.jpg'
import prewedding from './img/prewedding.jpg'
import babyshower from './img/babyshower.jpg'
import birthday from './img/birthday.jpg'
import baby from './img/baby.jpg'
import festival from './img/festival.jpg';


const Menu  = () => {

    return (
        <>
         <div >
            <h1 className="text-center p-3"> PHOTO GALLERY</h1>
            <div className="menu-div">
            <a href="#"><img src={wedding} className=" menu-img" alt="img1" /><h5>Wedding</h5></a>
            <a href="#"><img src={engeage} className="menu-img" alt="img2" /><h5>Engagement</h5></a>
            <a href="#"><img src={prewedding} className="menu-img" alt="img3" /><h5>Pre-wedding</h5></a>
            <a href="#"><img src={mehendi} className="menu-img" alt="img4" /><h5>Mehendi</h5></a>
            </div>
            <div className="menu-div">
            <a href="#"><img src={babyshower} className="menu-img" alt="img5" /><h5>Babyshower</h5></a>
            <a href="#"><img src={birthday} className="menu-img" alt="img6" /><h5>Birthday</h5></a>
            <a href="#"><img src={baby} className="menu-img" alt="img7" /><h5>Baby-shot</h5></a>
            <a href="#"><img src={festival} className="menu-img" alt="img8" /><h5>Festival</h5></a>
            </div>

         </div>

        </>
    )
}
export default Menu