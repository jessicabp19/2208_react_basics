import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  /* Custom Hook - { } */
  const { images, isLoading } = useFetchGifs( category );

  return (

    
    <>
        <h3> {category} </h3>
        {/* <LoadingMessage isLoading={isLoading} /> */}
        {
          // isLoading ? <h2> Cargando ... </h2> : null
          isLoading && <h2> Cargando ... </h2>
        }

        <div className="card-grid">
          { 
            images.map( (image) => ( //{id, title}
              <GifItem 
                key={image.id}
                { ...image } //Operador spread
              />
            ))
          }
        </div>
    </>
  )
}
