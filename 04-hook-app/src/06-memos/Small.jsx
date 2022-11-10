import React, { memo } from "react"; //Es una funcion para morizar el componente
//Solo cuando los properties cambien, se volverá a renderizar


//CRA React.memo, por que existe la refencia a react en el contexto global

export const Small = React.memo (({ value }) => {

    console.log("Me volvi a generar gg ");

  return (
    <small> { value } </small>
  )

})
