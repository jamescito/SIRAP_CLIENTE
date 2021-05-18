import React from 'react';

const Estudiantes = () => {
  return (
    <>
      <h1 className="text-2xl font-light mb-4">Agregar Estudiantes</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl ">

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigoCarnet">codigo Carnet</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="codigoCarnet"
                type="text"
                placeholder="Codigo Carnet"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">Apellido</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="apellido"
                type="text"
                placeholder="Apellido"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carrera_id">Codigo carrera</label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="carrera_id"
                type="text"
                placeholder="Codigo Carrrera"
              >

              </select>
            </div>

            <input
            className="bg-gray-800 hover:bg-gray-900  w-full mt-5 p-2 text-white uppercase font-bold"
            type="submit"
            value="Guardar"
            />
          </form>



        </div>
      </div>
    </>
  );
}

export default Estudiantes;