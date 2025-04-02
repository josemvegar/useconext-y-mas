import React, { useState } from 'react'

export const MiFormulario = () => {

    const [formulario, setFormulario] = useState({});

    const serializarFormulario = (formulario) => {
        const formData = new FormData(formulario);

        let objetoCompleto = {};

        for (let [name, value] of formData) {
            objetoCompleto[name] = value;
        }

        return objetoCompleto;
    }

    const enviado = e => {
        e.preventDefault();

        setFormulario(serializarFormulario(e.target));

    }

  return (
    <div>
        <h2>Formulario</h2>
        <p>Formulario para guardar un curso</p>
        <p>Curso Guardado:</p>
        <pre>{JSON.stringify(formulario)}</pre><br/>

    <form className='mi-formulario' onSubmit={enviado}>
        <input type='text' placeholder='Titulo' name='titulo'/>
        <input type='number' name='year' placeholder='Año de Publicación' />
        <textarea name='description' placeholder='Descripción' ></textarea>
        <input type='text' placeholder='Autor' name='autor'/>
        <input type='email' placeholder='Correo de Contacto' name='email'/>
        <input type='submit' value='Enviar' />

    </form>

    </div>
  )
}
