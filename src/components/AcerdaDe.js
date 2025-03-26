import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const AcerdaDe = () => {

    const {usuario, setUsuario} = useContext(PruebaContext); 

  return (
    <div>
        <h1>Acerca De</h1>
        <p>Página de Acerca De</p>
        <h2>Nombre Compartido: {usuario.nombre}</h2>
        <h2>Apellido Compartido: {usuario.apellido}</h2>
    </div>
  )
}
