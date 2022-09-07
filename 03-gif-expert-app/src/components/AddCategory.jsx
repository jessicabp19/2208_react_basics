import { useState } from 'react'

 
 export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //Evita que se recargue la página
        const cleanInput = inputValue.trim()
        if (cleanInput.length <= 1 ) return;
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory(cleanInput)
        setInputValue("");
    }

   return (

    <form onSubmit={ onSubmit }> 
    {/* (event) => onSubmit(event) */}
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>

   )
 }
 