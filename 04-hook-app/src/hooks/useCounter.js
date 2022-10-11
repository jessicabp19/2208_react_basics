
//use es un estandar

import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setcounter] = useState(initialValue);

    const increment = (value = 1) => {
        //console.log(value)
        setcounter(counter + value);
    }

    const decrement = () => {
        if ( counter === 0 ) return; //Lógica de negocio
        setcounter(counter - 1);
    }

    const reset = () => {
        setcounter(initialValue);
    }


    return {
        counter, //counter: counter
        increment,
        decrement,
        reset
    }


}