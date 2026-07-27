import data from "../data/new-logements.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import "../styles/Home.scss";
import "../styles/Navbar.scss";
import "../styles/Footer.scss";

export default function Home(){
    return(
        <>
        <Navbar/>
        <section className="sec1">  
            <div>
                <h1>Trouvez votre logement idéal</h1>
                <p>Découvrez des hébergements uniques et vivez comme un local
                    partout dans le monde</p>
            </div>
        </section>
        <section className="cards-grid">
            {data.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    location={item.location}
                    pictures={item.pictures}
                    tags={item.tags}
                />
            ))}
        </section>
        <Footer/>
        </>
    )
}