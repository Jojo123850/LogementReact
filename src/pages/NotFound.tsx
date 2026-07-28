import { Link } from "react-router-dom";
import "../styles/contactPropos.scss";
export default function NotFound() {
  return (
    <div className="divP">
      <h1 >404</h1>

      <p className="pagePC" >Cette page n'existe pas.</p>

      <Link to="/" className="btn">Retour à l'accueil</Link>
    </div>
  );
}