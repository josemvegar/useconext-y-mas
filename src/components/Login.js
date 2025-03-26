import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

    const {setUsuario} = useContext(PruebaContext); 

    const guardarDatos = e => {
      e.preventDefault();

      const usuario = {
        username: e.target.username.value,
        nombre: e.target.name.value,
        apellido: e.target.last.value
      }

      setUsuario(usuario)

    }

  return (
    <div>
        <h1>Login</h1>
        <p>Página de Login</p>

        <form className='login' onSubmit={guardarDatos}>
          <input type="text" name="username" placeholder='Nombre de Usuario' />
          <input type="text" name="name" placeholder='Nombre' />
          <input type="text" name="last" placeholder='Apellido' />
          <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}
