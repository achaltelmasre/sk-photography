
import "./Menu.css"
import wedding from './img/wedding.jpg';
import engeage from './img/enage.jpg';
import mehendi from './img/mehndi.jpg'
import prewedding from './img/prewedding.jpg'
import festival from './img/festival.jpg';

const Menu  = () => {

    return (
        <>
         <div className="menu-div">
            <img src={wedding} className=" menu-img" alt="img1" />
            <a><img src={engeage} className="menu-img" alt="img2" /></a>
            <a><img src={prewedding} className="menu-img" alt="img3" /></a>
            <a><img src={mehendi} className="menu-img" alt="img4" /></a>
            <a><img src={festival} className="menu-img" alt="img5" /></a>
            <a><img src="" className="menu-img" alt="img6" /></a>
            <a><img src="" className="menu-img" alt="img7" /></a>
            <a><img src="" className="menu-img" alt="img8" /></a>


         </div>

        </>
    )
}
export default Menu