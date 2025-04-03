import React, { useEffect, useState } from 'react'
import { useAjax } from '../hooks/useAjax';

export const MiUsuario = () => {

    const [url, setUrl] = useState('https://reqres.in/api/users/1');
    const {datos, cargando} = useAjax(url)

    const getId = ({target}) => {
        let id = parseInt(target.value);
        setUrl('https://reqres.in/api/users/' + id);
    }

  return (
    <div>
        
        <h2>Mi Usuario:</h2>
        <p>Datos del usuario: {cargando ? "Cargando..." : ""}</p>
        <p>Nombre: {datos?.first_name}</p>
        <p>Apellido: {datos?.last_name}</p>
        <input type='number' name='id' onChange={getId} />

    </div>
  )
}
