//Jsx bc it's a higher order component

/**
 * Por que lo creamos?
 * Nos permite saber como luce la información que vamos a colocar ahí
 * Tambien para que el hook de react busque este contexto
 * Y para definir el provedor
 */

import { createContext } from "react";

export const UserContext = createContext();