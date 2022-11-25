
//React.memo doesn't work entirely here, bc every increment func received from CallbackHook it's different

import React from "react";

export const ShowIncrement = React.memo( ({ increment }) => {

    console.log('Me volvi a generar ... :(');
    
  return (
    <button
        className="btn btn-primary"
        onClick={ () => {
          increment( 5 );
        } }>

        Incrementar
    </button>
  )
})
