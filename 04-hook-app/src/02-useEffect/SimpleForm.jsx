//Antes de ver el useEffect, necesito mantener el estado (useState)
//UseEffect es utilizado para disparar efectos secundarios
//Se recomienda crear efectos especificos para c/efecto deseado

import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jessicabp19',
        email: 'jessica@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {     //Recibe el event onChange
        const { name, value } = target;         //name indica si cambia username o email
        setFormState({
            ...formState,
            [name]: value                       //Propiedades computadas de los obj
        });
    }

    useEffect( () => { 
        // console.log('useEffect called!');
    }, []); //Solo se ejecuta 1 vez, cuando el componente se renderiza
    //Si no tiene ninguna dependencia se va a llamar c/vez que el form se redibuje

    useEffect( () => {
        // console.log('formState change!');
    }, [formState]);

    useEffect( () => {
        // console.log('email change');
    }, [email]);
    

  return (
    <>
    
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange} 
        />

        <input 
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        {
            (username == 'jessicabp19') && <Message />
        }

    </>
  )
}
