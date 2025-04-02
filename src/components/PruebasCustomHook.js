import React from 'react'
import { useMayus } from '../hooks/useMayus'
import { MiFormulario } from './MiFormulario';

export const PruebasCustomHook = () => {

    

    const {estado, mayusculas, minusculas, concatenar} = useMayus("José Vega");

  return (
    <div className='content'>
        <h2>1) Hook para transformar y concatenar textos</h2>
        {estado}<br/>
        <button onClick={mayusculas}>Poner en Mayúsculas</button><br/>
        <button onClick={minusculas}>Poner en Minúsculas</button><br/>
        <button onClick={ e => {concatenar("123.")}}>Concatenar</button><br/><br/>

        <h2>2) Formulario para agregar cursos</h2>
        <MiFormulario></MiFormulario>

    </div>
  )
}
