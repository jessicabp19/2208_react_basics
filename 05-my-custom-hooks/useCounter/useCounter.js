
//use es un estandar

import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setcounter] = useState(initialValue);

    const increment = (value = 1) => {
        if ( counter === 30 ) return; //Lógica de negocio
        //setcounter(counter + value);
        setcounter( (current) => current + value ); //toma el valor real
    }

    const decrement = ( value = 1) => {
        if ( counter === 1 ) return; //Lógica de negocio
        //setcounter(counter - 1);
        setcounter( (current) => current - value);
    }

    const reset = () => {
        setcounter(initialValue);
    }

    const set = (value = 1) => {
        if ( value < 1 || value > 30 ) return;
        setcounter(value);
    }


    return {
        counter, //counter: counter
        increment,
        decrement,
        set,
        reset
    }


}