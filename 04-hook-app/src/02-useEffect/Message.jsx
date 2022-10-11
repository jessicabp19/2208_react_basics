import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});
    //No debemos hacer cambios en el state de un componente que ya no está montado

    useEffect(() => {

        //Para remove, debeo hacer referencia a la función
        //Al espacio en memoria donde está definida
        const onMouseMove = ( {x,y} ) => {
            //const coords = { x, y};
            //console.log(coords);
            setCoords({x,y})
        }
      
        window.addEventListener( 'mousemove', onMouseMove)
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove )
      }
    }, [])
    


  return (
    <>
    
        <h3>Usuario ya existe</h3>
        { JSON.stringify(coords)}
    
    </>
  )
}
