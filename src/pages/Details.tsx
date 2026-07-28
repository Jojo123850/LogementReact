import data from "../data/new-logements.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Navbar.scss";
import "../styles/Footer.scss";
import { useParams } from "react-router-dom";
import "../styles/Detail.scss";
import CollapseCard from "../components/Collapse";
import CollapseEq from "../components/CollapseEquipement";
import GetPictures from "../components/Caroussel";


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

    const { title, location, pictures, tags, rating, host, description, equipments} = logement;
    const stars = [];
    const ratingNumber =Number(rating);

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
                  
            <GetPictures pictures={pictures} alt={title} />

            <div className="card-contentDetail">
                <h1>{title}</h1>

                <p className="location"> 
                    <i className="fa-solid fa-location-dot"></i> {location}
                </p>

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
           
            <CollapseCard title="Description" description={description} />
            <CollapseEq title="Equipements" equipments={equipments} />
            
        </div>

        <Footer/>
        </>
    );
    }

}