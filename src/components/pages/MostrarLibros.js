import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { useNavigate } from 'react-router-dom';


const MostrarLibros = ({ guardarLibros }) => {
  const [libros, setlibros] = useState({});

  const navigate = useNavigate();

  const pasarDatoslibros = (item) => {
    console.log(item);
    guardarLibros(item);
    navigate('/EditarEstudiantes');
  }
  const obtenerDatosLibros = async (numeroPagina = 1) => {
    const url = `http://127.0.0.1:8000/api/libros?page=${numeroPagina}`;
    const response = await axios.get(url);
    console.log('response', response.data);
    setlibros(response.data);
  }

  useState(() => {
    obtenerDatosLibros();
  }, []);

  const renderizarListaLibros = () => {
    const { data, current_page, per_page, total } = libros;

    return (
      <>

        <table class="table p-4 bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                #Codigo Libro
            </th>
              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Titulo
            </th>
              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Cantidad pagina
            </th>
              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                libro Original </th>

              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Año de publicacion </th>

              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Idioma </th>

              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Codigo de area </th>

              <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Codigo de editoriales </th>


            </tr>


          </thead>
          <tbody>
            {data?.map((Libro, index) => {
              return (
                <tr class="text-gray-700">
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.codigolibro}</td>
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.titulo}</td>
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.cantidadpaginas}</td>
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.libroOriginal}</td>
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.aniopublicacion}</td>
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.idioma}</td>
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.area_id}</td>
                  <td class="border p-4 dark:border-dark-5" key={index}>{Libro.editoriales_id}</td>

                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <form action="" method="post">

                      <button onClick={() => pasarDatoslibros(Libro)} className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
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
            onChange={(numeroPagina) => obtenerDatosLibros(numeroPagina)}
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
            {libros && renderizarListaLibros()}
          </div>
        </div>

      </div>

    </>
  );
}

export default MostrarLibros;