import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="md:w-2/5 xl:w-1/5 bg-blue-900">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">SIRAP</p>

                <nav className="mt-12">
                    <NavLink activeClassName="text-white" to="/estudiantes" className="p-1 text-white-400 block hover:bg-white hover:text-yellow-700" >
                        Estudiantes</NavLink>
                </nav>

                <nav className="mt-12">
                    <NavLink activeClassName="text-white" to="/libro" className="p-1 text-white-400 block hover:bg-white hover:text-yellow-700" >
                        Libros</NavLink>
                </nav>

            </div>
        </div>
    );
}

export default Sidebar;