import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGrid = (category) => {

     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category).then(setIsLoading(false));
        console.log(newImages)
        setImages(newImages)
    }

    useEffect(() => {
        getImages();

    }, [])
    return {
        images: images,
        isLoading: isLoading
    }

}
