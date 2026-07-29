import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import BurgerM from "./BurgerMenu"; 

// pour le header
export default function Navbar(){
    return(
        <header>
        <div className="headerDiv">
            <Link className="logo" to="/">
                Kasa
            </Link>

            <BurgerM/>
          
        </div>
    </header>
    )
}