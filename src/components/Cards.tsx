import "../styles/Cards.scss";

export type RoomCard = {
    id: string;
    title: string;
    location: string;
    pictures: string[];
    tags: string[];
    rating: string;
};

export default function Card({ title, location, pictures, tags, rating }: RoomCard) {
    const ratingCards = parseInt(rating, 10);
    const stars = []; 
   
    for(  let i = 5;i<=5; i++){
        if(i <= ratingCards){
            stars.push(<i   key= {i} className="fa-solid fa-star"></i>)   
        }else{
        stars.push(<i  key= {i} className="fa-solid fa-star"></i>)
        }

    }
    return (
        <div className="card">
            <a href="#">
            <img src={pictures[1]} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p className="location">{location}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <p className="rating">{stars}</p>
            </div>
            </a>
        </div>
    );
}