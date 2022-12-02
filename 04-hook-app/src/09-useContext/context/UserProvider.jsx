import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Jessica Botón',
//     email: 'jessicaboton@google.com'
// }

//Valor que el userContext va a proporcionarle al árbol de nuestros componentes

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState();

  return (
    
    // <UserContext.Provider value={{ hola: 'Mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
