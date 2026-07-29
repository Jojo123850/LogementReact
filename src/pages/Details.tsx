import data from "../data/new-logements.json";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "../styles/Detail.scss";
import Collapse from "../components/Collapse";
import IconeEquip from "../utils/Icone";
import Carrousel from "../components/Carrousel";


// fonction pour afficher les détails
export default function Detail(){
    const { id } = useParams();
    const logement = data.find((item) => item.id === id)

    // au cas ou on trouve  pas de logement
    if(!logement){
        return(
            <>
                <Navbar/>
                    <h3>Logement introuvable</h3>
                    <Link to="/" className="btn">Retour à l'accueil</Link>
                <Footer/>
            </>
        )
    } else{

    const { title, location, pictures, tags, rating, host, description, equipments} = logement;
    const stars = [];
    const ratingNumber =Number(rating);

    // pour afficher le rating
    for (let i = 1; i <= 5; i++) {
        if (i <= ratingNumber) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        } else {
            stars.push(<i key={i} className="fa-regular fa-star"></i>);
        }
    }
    return (
        <>
        <Navbar/>

        <div className="cardDetail">
         {/*carroussel du composant carrousel.tsx  */}
            <Carrousel pictures={pictures} alt={title} />

            <div className="card-contentDetail">
                <h1>{title}</h1>

                <p className="location"> 
                    <i className="fa-solid fa-location-dot"></i> {location}
                </p>

                {/*  parcourir les tags du logement et afficher chaque tag */}
                <div className="tags">
                    {tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
                </div>

                <div className="rating">
                    {stars}
                </div>
            </div>

            <article>
                <img src={host.picture} alt={host.name} />

                <div className="divInfo">
                    <h3>{host.name}</h3>
                    <p>Hote depuis 3ans</p>
                </div>
            </article>

           {/* collapse du composant collapse */}
           <Collapse title="Description">{description}</Collapse>

            <Collapse title="Équipements">

           {/* parcourir le tableau equipements et afficher l'icône + le nom de chaque équipement*/}
                <ul className="list-equip">
                    {equipments.map((eq) => (
                    <li key={eq}>{IconeEquip(eq)} <span>{eq}</span></li>
                    ))}
                </ul>
            </Collapse>

        </div>

        <Footer/>
        </>
    );
    }

}