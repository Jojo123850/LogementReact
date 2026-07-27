export type RoomCard = {
    id: string;
    title: string;
    location: string;
    pictures: string[];
    tags: string[];
};

export default function Card({ title, location, pictures, tags }: RoomCard) {
    return (
        <div className="card">
            <img src={pictures[0]} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p className="location">{location}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}