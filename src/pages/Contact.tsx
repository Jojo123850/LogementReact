import { Link } from "react-router-dom";
import "../styles/contactPropos.scss";

// j'ai ajouté du contenu dans Contact
export default function Contact(){
    return(
        <>
        <div className="divP">
            <p className="pagePC">Contacte-moi</p>  
            <Link to="/" className="btn">Retour à l'accueil</Link>
        </div>
        </>
    )
}