import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

// pour le header
export default function Navbar(){
    return(
        <header>
        <div>
            <Link className="logo" to="/">
                Kasa
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/APropos">A propos</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <i id="burgerMenu" className="fa-solid fa-bars"></i>
        </div>
    </header>
    )
}