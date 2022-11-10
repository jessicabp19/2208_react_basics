import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

/**
 * Podemos memorizar estos componentes, lo cual es recomendado únicamente cuando los componentes
 * son muy grandes o cuando hay un procesos pesado que solo queremos ejecutar cuando las properties cambien
 * Usualmente no hace falta hacerlo en todos los lugares, solo cuando haya una depreciación considerable
 */

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true)



  return (
    <>
        <h1>Counter: <Small value={ counter }></Small> </h1>
    
        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow(!show) }
        >
            Show/Hide { JSON.stringify(show) //stringify por que es un valor booleano y no se muestra
            } 
        </button>
    </>
  )
}
