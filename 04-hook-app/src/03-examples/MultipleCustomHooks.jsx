import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote, author } = !!data && data[0];

    // if(isLoading) { //This is an option
    //   return(
    //     <h1>Cargando...</h1>
    //   )
    // }

    return (
    <>
    
        <h1>Breaking Bad Quotes</h1>

        <hr />

        {
          isLoading
          ? <LoadingQuote />
          : <Quote quote={quote} author={author} />
        }

        <button className="btn btn-primary" 
          onClick={ () => increment() }
          disabled={ isLoading }>
          Next Quote
        </button>

    </>
  )
}

//TODO: PROPTYPES Y PROBAR, REGRESAR AL QUOTE ANTERIOR, BUSCAR POR ID, HASERROR EN EL USEFETCH
//Bien podemos juntar la validación del loading dentro del Quote
//Pero idealmente...Principio de Responsabilidad Unica