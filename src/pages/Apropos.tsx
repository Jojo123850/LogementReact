import { Link } from "react-router-dom";
import "../styles/contactPropos.scss";

export default function Propos(){
    return(
        <>
        <div className="divP">
            <p className="pagePC">Salut beaugosse</p>
            <Link to="/"  className="btn">Retour à l'accueil</Link>
        </div>
        </>
    )
}