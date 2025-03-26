import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

    const {usuario} = useContext(PruebaContext); 

  return (
    <div>
        <h1>Inicio</h1>
        <p>Página de Inicio</p>
        <h2>Nombre Compartido: {usuario.nombre}</h2>
        <h2>Apellido Compartido: {usuario.apellido}</h2>
    </div>
  )
}
