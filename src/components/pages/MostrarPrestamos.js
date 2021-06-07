import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import {useNavigate,Link} from 'react-router-dom';
import Prestamos from './Prestamos';

const MostrarPrestamos = ({guardarPrestamo}) => {
    const [prestamos, setPrestamos] = useState({});

    const navigate = useNavigate();

const pasarDatosPrestamos = (item) => {
    console.log(item);
    guardarPrestamo(item);
    navigate('/EditarPrestamos');
}
    const obtenerDatosPrestamos = async (numeroPagina = 1) => {
        const url = `http://127.0.0.1:8000/api/prestamos?page=${numeroPagina}`;
        const response = await axios.get(url);
        console.log('response',response.data);
        setPrestamos(response.data);
    }

    useState(() => {
        obtenerDatosPrestamos();
    }, []);

    const renderizarListaPrestamos = () => {
        const { data, current_page, per_page, total } = prestamos;

        return (
            <>
            <Link to="/Prestamos" className="bg-green-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Prestamos
            </Link>
                        <table class="bg-white shadow rounded-lg min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        #Codigo
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        Carnet
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        Codigo libro
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        Fecha de prestamo </th>

                                        <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        Fecha devolución </th>

                                        <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                        F. estado</th>

                             
                                </tr>
                                
                                
                            </thead>
                            <tbody>
                                {data?.map((prestamo, index) => {
                                    return (
                                        <tr class="text-gray-700">
                                            <td class="border p-4 dark:border-dark-5" key={index}>{prestamo.codigoPrestamo}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{prestamo.estudiante_id}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{prestamo.libro_id}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{prestamo.fechaprestamo}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{prestamo.fechadevolucion}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{prestamo.fechaestadoprestamo}</td>
                                           
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <form action="" method="post">

                                               <button onClick={() => pasarDatosPrestamos(prestamo)} className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
                                                <button className="text-indigo-600 hover:text-indigo-900 mr-4">Eliminar</button>
                                            </form>
                                            </td> 
                                            
                                        </tr>
                                    );
                                })
                                
                                }



                            </tbody>
                          
                        </table>

                   

                <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between  ">
                    <Pagination
                        activePage={current_page}
                        totalItemsCount={total}
                        itemsCountPerPage={per_page}
                        onChange={(numeroPagina) => obtenerDatosPrestamos(numeroPagina)}
                        itemClass="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        linkClass="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100 "
                    />

                </div>
            </>
        )
    }




    return (
        <>
 <div className="container mx-3 px-3 sm:px-6 max-w-7xl">

<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    {prestamos && renderizarListaPrestamos()}
  </div>
</div>

</div>

        </>
    );
}
 
export default MostrarPrestamos;