import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

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
                    <li><Link to="/projects">A propos</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <i id="burgerMenu" className="fa-solid fa-bars"></i>
        </div>
    </header>
    )
}