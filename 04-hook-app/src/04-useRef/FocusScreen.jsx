import { useRef } from "react";

/**
 * 
 * Nos ayuda a mantener una referencia
 * y que cuando esta cambie,
 * no se dispare una re renderización del componente
 * Se pueden establecer objetos, expresiones booleanas, etc
 */

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => { 
       //document.querySelector('input').select();
        console.log(inputRef)
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef } //El input ref va a enviar el html element
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control">
        
        </input>

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }>
                Set Focus
        </button>
    </>
  )
}
