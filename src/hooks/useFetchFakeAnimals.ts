import { useEffect, useState } from 'react';
import { getFakeAnimal } from '../helpers/getFakeAnimal';

export const useFetchFakeAnimals = ( animals: string ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages:any = await getFakeAnimal( animals );
        console.log(newImages)
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}