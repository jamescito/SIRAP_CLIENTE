import React from 'react';
const Prestamos = () => {
    return ( 
        <>
      <h1 className="text-2xl font-light mb-4">Agregar Libros Prestamos</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl ">

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigoCarnet">codigo Prestamo</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="codigoPrestamo"
                type="text"
                placeholder="Código Prestamo"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Carnet Estudiante</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="estudiante_id"
                type="text"
                placeholder="Carnet Estudiante"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">Codigo Libro</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="libro_id"
                type="text"
                placeholder="Codigo Libro"
              />
            </div>


            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aniopublicacion">Fecha de Prestamo</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fechaprestamo"
                                type="date"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aniopublicacion">Fecha devolución</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fechadevolucion"
                                type="date"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aniopublicacion">Fecha estado de prestamo</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fechaestadoprestamo"
                                type="date"
                            />
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
 
export default Prestamos;