import { useEffect } from "react";
import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback( //Memorizar funciones, regresa una función que podemos ejecutar y solo se volverá a procesar si algo cambia
      ( value ) => {
        setCounter( (c) => c + value ); //counter + 1 doesn't work bc 'counter' it's memorized too
      },
      [],
    )

    /**
     * Segundo Uso
     * Si deseamos que solo cuando cierta función cambie disparemos un efecto
     * Entonces al utilizar el memo y callback
     * useEffect defecta que es la misma función y no caemos en un ciclo infinito :)
     */
    useEffect(() => { 
      //incrementFather();
    }, [incrementFather])
    
    return (
    <>
        <h1> UseCallbackHook: { counter } </h1>
        <hr />

        <ShowIncrement increment={ incrementFather }/>
    </>
  )
}
