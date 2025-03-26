import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Contacto = () => {

  const {usuario, setUsuario} = useContext(PruebaContext); 

  return (
    <div>
        <h1>Contacto</h1>
        <p>Página de Contacto</p>
        <h2>Nombre Compartido: {usuario.nombre}</h2>
        <h2>Apellido Compartido: {usuario.apellido}</h2>
    </div>
  )
}
