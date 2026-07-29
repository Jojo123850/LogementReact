import { Link } from "react-router-dom";
import "../styles/Cards.scss";

export type RoomCard = {
    id: string;
    title: string;
    location: string;
    pictures: string[];
    tags: string[];
    rating: string;
};

export default function Card({ id, title, location, pictures, tags, rating }: RoomCard) {

    const ratingNumber =Number(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= ratingNumber) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        } else {
            stars.push(<i key={i} className="fa-regular fa-star"></i>);
        }
    }

    return (
        <div className="card">
           <Link to={`/logement/${id}`}>
            <img src={pictures[0]} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p className="location"><i className="fa-solid fa-location-dot"></i>  {location}
                </p>

                <div className="tags">
                    {tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>))}
                </div>

                <p className="rating">{stars} <span> ({rating})</span> </p>
            </div>
          
           </Link>
        </div>
    );
}