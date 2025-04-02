import './App.css';
import React, {useState, useEffect } from 'react'
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';
import { MiComponente } from './components/MiComponente';
import { PruebasCustomHook } from './components/PruebasCustomHook';

function App() {

  const [usuario, setUsuario] =useState({});

  useEffect(() => {
    if(localStorage.getItem("usuario") === null){
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }
    setUsuario(JSON.parse(localStorage.getItem("usuario")));
  }, []);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  /*const curso = {
    id: 1,
    titulo: "Master en TypeScript",
    contenido: "Muchas horas de contenido."
  }*/
  
  return (
    <div className="App">
      <h1>Hook useContext</h1>
      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter></AppRouter>
      </PruebaContext.Provider>

      <hr/>
      <hr/>
      <h1>Hook useID</h1>
      <MiComponente></MiComponente>

      <hr/>
      <hr/>
      <h1>Custom Hook's</h1>
      <PruebasCustomHook></PruebasCustomHook>
    </div>
  );
}

export default App;
