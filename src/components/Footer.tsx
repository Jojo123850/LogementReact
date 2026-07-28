import { Link } from "react-router-dom";

export default function Footer(){
    return(
<footer>
        <div className="footer1">
             <article className="art111">
                <h3>À propos de Kasa</h3>
                 <ul>
                    <li><a  href="#">Notre histoire</a></li>
                    <li><a href="#">Equipe</a></li>
                    <li><a href="#">Carrière</a></li>
                    <li><a href="#">Presse</a></li>
                </ul>
            </article>
            <article>
                <h3>Support</h3>
                <ul>
                    <li><a  href="#">Centre d'aide</a></li>
                    <li><a href="#">Nous contacter</a></li>
                    <li><a href="#">Signaler un problème</a></li>
                    <li>
                        <Link to="/NotFound">Page 404</Link>
                    </li>
                </ul>
            
            </article>
 
            <article>
                <h3>Légal</h3>    
                 <ul>
                        <li><a  href="#">Conditions d'utilisation</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Cookies</a></li>
                 </ul>  
            </article>

           
        </div>

        <div className="copyright">
            <p>© 2024 Kasa. Tous droits réservés.<a href="https://storycom.fr"></a></p>
        </div>

    </footer>

    )
}

