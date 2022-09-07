//Es una función pero no es un functional component por que no está regresando un objeto jsx
//Un hook no es mas que una función que regresa algo

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }

    // NUNCA, Debemos colocar la ejec de una func directamernte en un functional component
    // Por que c/vez que el functional component se vuelva a renderizar, va volver a ejecutar esta función (vuelve a ejecutar la función http)
    // getGifs(category); (This code used to be in GifGrid)

    // UseEffect, ejecutar Efectos secundarios
    // Si dejo las dep vacias, se ejecutará unicamente cuando se construya mi componente por primera vez
    // useEffect no puede ser Async, por que regresaría implicitamente una promesa
    // Y el useEffect solo debería regresar una función (used for clean-up)
    useEffect( () => {
      getImages();
      // getGifs(category)
      //   .then( newImages => setImages(newImages));
    }, []  ) 

  return {
    images, //images: images
    isLoading
  }
}
