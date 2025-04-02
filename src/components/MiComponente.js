import React, { useId } from 'react'

export const MiComponente = () => {

  //const id= null;

  return (
    <div className='content'>
      <p>El useId() sirve para crear un id que no se repetirá en ningun lugar.</p>
      <p>Id 1: {useId()} </p>
      <p>Id 1: {useId()} </p>
      <p>Id 1: {useId()} </p>
    </div>
  )
}
