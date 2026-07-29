import { useState } from "react";

type Carrousel = {
    pictures:string[];
    alt: string;
}

export default function Carrousel({ pictures, alt }: Carrousel){
    const [pictureIndex, setPicture ] = useState<number>(0);

    const prevPic = () => {
        setPicture((prevImage) => {
            if(prevImage === 0) {
                return pictures.length - 1;
            } else{
                return prevImage -1
            }
        })
    }

   
    const nextPic = () => {
        setPicture((nextImage) => {
            if(nextImage === pictures.length -1) {
                return 0;
            } else{
                return nextImage + 1;
            }
        })
    }

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