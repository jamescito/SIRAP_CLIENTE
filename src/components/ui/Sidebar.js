import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="md:w-2/12 xl:w-2/12 bg-green-700">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">SIRAP</p>
                <nav className="mt-12">
                    <NavLink activeClassName="text-white" to="/mostrarprestamos" className="p-1 text-white-400 block hover:bg-white hover:text-yellow-700" >
                        Mostrar Prestamos</NavLink>
                </nav>

                <nav className="mt-12">
                    <NavLink activeClassName="text-white" to="/mostrarlibros" className="p-1 text-white-400 block hover:bg-white hover:text-yellow-700" >
                        Mostrar Libros</NavLink>
                </nav>

                <nav className="mt-12">
                    <NavLink activeClassName="text-white" to="/mostrarestudiantes" className="p-1 text-white-400 block hover:bg-white hover:text-yellow-700" >
                        Mostrar Estudiantes</NavLink>
                </nav>

                

                

                

            </div>
        </div>
    );
}

export default Sidebar;