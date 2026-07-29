import { Link } from "react-router-dom";
import "../styles/contactPropos.scss";

// j'ai ajouté un peu de contenu dans A propos
export default function Propos(){
    return(
        <>
        <div className="divP">
            <p className="pagePC">Cette page est vide</p>
            <Link to="/"  className="btn">Retour à l'accueil</Link>
        </div>
        </>
    )
}