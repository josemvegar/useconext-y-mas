import React, { useContext } from 'react';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { AcerdaDe } from '../components/AcerdaDe';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

    const {usuario, setUsuario} = useContext(PruebaContext);

  return (
    <BrowserRouter>
        <header className='header'>

            <nav>
                <div className='logo'><h2>Aprendiendo Context</h2></div>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articulos">Artículos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/acercade">Acerca De</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                    
                        {usuario.hasOwnProperty("username") && usuario.username !== null ? (
                        <>
                            <li>
                                <NavLink to="/">{usuario.username}</NavLink> 
                            </li>
                            <li>
                            <a href="#" onClick={e => {
                                e.preventDefault();
                                setUsuario({});
                            }}>Cerrar Sesión</a> 
                            </li>
                        </>) : 
                        (<li>
                            <NavLink to="/login">Login</NavLink>
                        </li>)}
                    <li>
                        
                    </li>
                </ul>
            </nav>
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Inicio/>} ></Route>
                    <Route path='/inicio' element={<Inicio/>} ></Route>
                    <Route path='/articulos' element={<Articulos/>} ></Route>
                    <Route path='/acercade' element={<AcerdaDe/>} ></Route>
                    <Route path='/contacto' element={<Contacto/>} ></Route>
                    <Route path='/login' element={<Login/>} ></Route>
                    <Route path='*' element={(<div>
                        ESTA PÁGINA NO EXISTE.
                    </div>)} ></Route>
                </Routes>
            </section>

        </header>
    </BrowserRouter>
  )
}
