
import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    //Si no regreso algo del hookCounter, no hay manera de cambiarlo desde acá
    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>

        <h1>Counter With Hook: {counter} </h1>
        <hr />
        {/* increment --> (event) => increment(event) */}
        <button className='btn btn-primary' onClick={ () => increment(2) }> +1 </button>
        <button className='btn btn-primary' onClick={reset}> Reset </button>
        <button className='btn btn-primary' onClick={ () => decrement(2) }> -1 </button>

    </>
  )
}
