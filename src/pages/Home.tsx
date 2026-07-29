import data from "../data/new-logements.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import "../styles/Home.scss";

// la page d'accueil
export default function Home(){
    return(
        <>
        <Navbar/>

        <main>
        <section className="sec1">  
            <div>
                <h1>Trouvez votre logement idéal</h1>
                <p>Découvrez des hébergements uniques et vivez comme un local
                    partout dans le monde</p>
            </div>
        </section>

        <section className="cards-grid">
        {/* parcourir chaque logement dans data  et afficher une card  */}
            {data.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    location={item.location}
                    pictures={item.pictures}
                    tags={item.tags}
                    rating={item.rating}
                />
            ))}
        </section>
        </main>

        <Footer/>
        </>
    )
}