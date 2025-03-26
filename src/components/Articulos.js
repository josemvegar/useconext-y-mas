import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Articulos = () => {

  const {usuario} = useContext(PruebaContext); 

  return (
    <div>
        <h1>Artículos</h1>
        <p>Página de Artículos</p>
        <h2>Nombre Compartido: {usuario.nombre}</h2>
        <h2>Apellido Compartido: {usuario.apellido}</h2>
    </div>
  )
}
