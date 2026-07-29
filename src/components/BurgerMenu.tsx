import { useState} from "react";
import { Link } from "react-router-dom";



// fonction pour le collapse BurgerMenu
export default function BurgerM() {

// variable par défaut false et fonction pour changer l'état du collapse
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div>
        <button id="burgerMenu" aria-expanded={isOpen} aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
        <div className="collapsediv">
                <nav aria-expanded={isOpen}>
                    <ul className={isOpen ? "menu-open" : "menu-closed"}>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Apropos">A propos</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
        </div>
      </div>
    
  );
}