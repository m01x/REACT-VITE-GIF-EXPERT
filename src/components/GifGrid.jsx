import { useEffect, useState } from "react"
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
    }

    useEffect(() => {
        getImages();

    }, [])


    return (
        <div key={category}>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            //omg!! wea wena!
                            {...image}
                        />
                    ))
                }
            </div>
        </div >
    )
}
