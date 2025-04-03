import React from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

    const {formulario, cambiado, enviado} = useForm({});

  return (
    <div>
        <h2>Formulario</h2>
        <p>Formulario para guardar un curso</p>
        <p>Curso Guardado: {formulario.titulo}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre><br/>

    <form className='mi-formulario' onSubmit={enviado}>
        <input type='text' placeholder='Titulo' name='titulo' onChange={cambiado}/>
        <input type='number' name='year' placeholder='Año de Publicación' onChange={cambiado} />
        <textarea name='description' placeholder='Descripción' onChange={cambiado} ></textarea>
        <input type='text' placeholder='Autor' name='autor' onChange={cambiado} />
        <input type='email' placeholder='Correo de Contacto' name='email' onChange={cambiado} />
        <input type='submit' value='Enviar' />

    </form>

    </div>
  )
}
