import { useState } from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

  
  const { counter, increment, decrement, set } = useCounter(1);
  
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`); 
  //New API: https://github.com/shevabam/breaking-bad-quotes
  //Previous API: https://www.breakingbadapi.com/api/quotes/
  
  //const { quote, author } = !!data && data[0];
  
  // if(isLoading) { //This is an option
  //   return(
    //     <h1>Cargando...</h1>
    //   )
    // }
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
      setInputValue(target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();

      if(inputValue.trim().length < 1 ) return;
      set(inputValue.trim())
    }

    return (
    <>
    
        <h1>Breaking Bad Quotes</h1>

        {/* <form onSubmit={ onSubmit }>
          <input
            type="text"
            placeholder="Search ID (1-30)"
            value = { inputValue }
            onChange = { onInputChange }
          />
        </form> */}
        
        <hr />
        
        {
          isLoading
          ? <LoadingQuote />
          : data.map( (q) => <Quote key={q.quote} quote={q.quote} author={q.author} />) //<Quote quote={quote} author={author} />//
        }

        <button className="btn btn-primary" 
          onClick={ () => decrement() }
          disabled={ isLoading }>
          &#8920; Less Quotes
        </button>

        <button className="btn btn-primary" 
          onClick={ () => set(1) }
          disabled={ isLoading }>
          Reset
        </button>

        <button className="btn btn-primary" 
          onClick={ () => increment() }
          disabled={ isLoading }>
          More Quotes &#8921;
        </button>


    </>
  )
}

//TODO: HASERROR EN EL USEFETCH
//Bien podemos juntar la validación del loading dentro del Quote
//Pero idealmente...Principio de Responsabilidad Unica