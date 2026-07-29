import { useState } from "react";

// typage Carrousel
type Carrousel = {
    pictures:string[];
    alt: string;
}

// fonction pour le carrousel
export default function Carrousel({ pictures, alt }: Carrousel){
  // index de l'image affichée (0 par défaut) et fonction pour le changer
    const [pictureIndex, setPicture ] = useState<number>(0);

    // pour le btn prev
    const prevPic = () => {
        setPicture((prevImage) => {
            if(prevImage === 0) {
                return pictures.length - 1;
            } else{
                return prevImage -1
            }
        })
    }

//    pour le btn next
    const nextPic = () => {
        setPicture((nextImage) => {
            if(nextImage === pictures.length -1) {
                return 0;
            } else{
                return nextImage + 1;
            }
        })
    }

    // si aucune image, on affiche p à la place d'un Carrousel vide 
    if(!pictures || pictures.length === 0){
       return <p>Il y a pas d'image</p>
    }



    return(
        <>
        <div className="divImage">
            <button className="btn1" onClick={prevPic}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            <img className="image" src= {pictures[pictureIndex]} alt={alt} />

            <button className="btn2" onClick={nextPic}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        </>
    )
}