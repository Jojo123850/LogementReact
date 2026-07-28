import { useState } from "react";




type Caroussel = {
    pictures:string[];
    alt: string;

}

export default function GetPictures({ pictures, alt }: Caroussel){
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
            if(nextImage === 0) {
                return pictures.length - 1;
            } else{
                return nextImage + 1
            }
        })
    }

    if(pictures.length === 0){
        <p>Il y a pas d'image</p>
    }
    return(
        <>
             <button onClick={prevPic}>Prev</button>
            <img src= {pictures[pictureIndex]} alt={alt} />
           <button onClick={nextPic}>Next</button>
        </>
    )
}