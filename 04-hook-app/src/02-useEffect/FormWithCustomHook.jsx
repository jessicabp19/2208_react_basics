//Antes de ver el useEffect, necesito mantener el estado (useState)
//UseEffect es utilizado para disparar efectos secundarios
//Se recomienda crear efectos especificos para c/efecto deseado

import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });
    
    //const { username, email, password } = formState;

  return (
    <>
    
        <h1>Form with Custom Hook</h1>
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

        <input 
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button onClick={ onResetForm } className='btn btn-primary mt-3'>Borrar</button>

    </>
  )
}
