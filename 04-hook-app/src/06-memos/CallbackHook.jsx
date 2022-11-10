import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback( //Memorizar funciones, regresa una función que podemos ejecutar y solo se volverá a procesar si algo cambia
      () => {
        setCounter(counter + 1);
      },
      [],
    )

    return (
    <>
        <h1> UseCallbackHook: { counter } </h1>
        <hr />

        <ShowIncrement increment={ incrementFather }/>
    </>
  )
}
