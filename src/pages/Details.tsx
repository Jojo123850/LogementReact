import data from "../data/new-logements.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Navbar.scss";
import "../styles/Footer.scss";
import { useParams } from "react-router-dom";
import "../styles/Detail.scss";
import CollapseCard from "../components/Collapse";
import CollapseEq from "../components/CollapseEquipement";


export default function Detail(){
    const { id } = useParams();
    const logement = data.find((item) => item.id == id)

    if(!logement){
        return(
            <>
                <Navbar/>
                <h3>Logement itrouvable</h3>
                <Footer/>
            </>
        )
    } else{

    const { title, location, pictures, tags, host, description, equipments} = logement;
    return (
        <>
        <Navbar/>
        <div className="cardDetail">
            <img className="pic" src={pictures[0]} alt={title} />
            <div className="card-contentDetail">
                <h3>{title}</h3>
                <p className="location"> <i className="fa-solid fa-location-dot"></i> {location}</p>
                <div className="tags">{tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
                </div>
            </div>
            <article>
                <img src={host.picture} alt={host.name} />
                <div>
                    <h3>{host.name}</h3>
                    <p>Hote depuis 3ans</p>
                </div>
            </article>
           
        </div>
       <CollapseCard title="Description" description={description} />
        <CollapseEq title="Equipements" equipments={equipments} />

        
        <Footer/>
        </>
    );
    }

}