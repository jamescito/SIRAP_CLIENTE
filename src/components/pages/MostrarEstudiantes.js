import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import {useNavigate} from 'react-router-dom';

import { NavLink } from 'react-router-dom';
const MostrarEstudiantes = ({guardarEstudiante}) => {
    const [estudiantes, setEstudiantes] = useState({});

    const navigate = useNavigate();

const pasarDatosEstudiantes = (item) => {
    console.log(item);
    guardarEstudiante(item);
    navigate('/EditarEstudiantes');
}
    const obtenerDatosEstudiantes = async (numeroPagina = 1) => {
        const url = `http://127.0.0.1:8000/api/estudiantes?page=${numeroPagina}`;
        const response = await axios.get(url);
        console.log('response',response.data);
        setEstudiantes(response.data);
    }

    useState(() => {
        obtenerDatosEstudiantes();
    }, []);

    const renderizarListaEstudiantes = () => {
        const { data, current_page, per_page, total } = estudiantes;

        return (
            <>
            
                        <table class="table p-4 bg-white shadow rounded-lg">
                            <thead>
                                <tr>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        #Codigo Carnet
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        Nombre
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        Apellido
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        Codigo de carrera </th>

                             
                                </tr>
                                
                                
                            </thead>
                            <tbody>
                                {data?.map((estudiante, index) => {
                                    return (
                                        <tr class="text-gray-700">
                                            <td class="border p-4 dark:border-dark-5" key={index}>{estudiante.codigoCarnet}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{estudiante.nombre}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{estudiante.apellido}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{estudiante.carrera_id}</td>
                                           
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <form action="" method="post">

                                               <button onClick={() => pasarDatosEstudiantes(estudiante)} className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
                                                <button className="text-indigo-600 hover:text-indigo-900 mr-4">Eliminar</button>
                                            </form>
                                            </td> 
                                            
                                        </tr>
                                    );
                                })
                                
                                }



                            </tbody>
                          
                        </table>

                   

                <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between ">
                    <Pagination
                        activePage={current_page}
                        totalItemsCount={total}
                        itemsCountPerPage={per_page}
                        onChange={(numeroPagina) => obtenerDatosEstudiantes(numeroPagina)}
                        itemClass="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        linkClass="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100 "
                    />

                </div>
            </>
        )
    }




    return (
        <>
 <div className="container mx-auto px-4 sm:px-8 max-w-3xl">

<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    {estudiantes && renderizarListaEstudiantes()}
  </div>
</div>

</div>

        </>
    );
}

export default MostrarEstudiantes;