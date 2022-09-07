
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

/* Cuando querramos almacenar información y esa información tiene que cambiar el HTML
Usualmente lo primero que deberíamos pensar: Ok, necesito algún Hook de React para mantener el estado */

  const [categories, setCategories] = useState([ "Grey's Anatomy" ]);

  /* 
  - Los hooks no tienen nombre como tal, se enumeran
  - Nunca poner algún Hook the react dentro de un condicional 
  */

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory) ) return;

    // categories.push(newCategory) // Esto No :)
    setCategories( [newCategory, ...categories] ); //Operador Spread
    //setCategories( cat => [...cat, 'PopCorn'] ); //Callback
  }

  return (
    <> 
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={ event => onAddCategory(event) } 
      />

      {
        
      categories.map( (category) => (
        <GifGrid 
          key={category} 
          category={category} 
        />
      ))
      }
    </>
  )
}
