import React from 'react';

const Libro = () => {
    return (
        <>
            <h1 className="text-2xl font-light mb-4">Agregar Libros</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl ">

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigolibro">Codigo libro</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="codigolibro"
                                type="text"
                                placeholder="Codigo libro"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">Titulo</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="titulo"
                                type="text"
                                placeholder="Titulo"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidadpaginas">Cantidad de paginas</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cantidadpaginas"
                                type="number"
                                min="0"
                                placeholder="Cantidad de paginas"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="libroOriginal">Originalidad de libro</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="libroOriginal"
                                type="text"

                            >
                                <option value="">--Seleccione--</option>
                                <option value="Original">Original</option>
                                <option value="Copia">Copia</option>
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aniopublicacion">Año de publicacion</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="aniopublicacion"
                                type="date"


                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idioma">Escrito en la idioma</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="idioma"
                                type="text"

                            >
                                <option value="">--Seleccione--</option>
                                <option value="español">Español</option>
                                <option value="ingles">Ingles</option>
                                <option value="italiono">Italiano</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area_id">Codigo area</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="area_id"
                                type="text"
                                placeholder="Codigo area"
                            >

                                <option value="">--Seleccione--</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editoriales_id">Codigo editoriales</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="editoriales_id"
                                type="text"
                                placeholder="Codigo editoriales"
                            >

                                <option value="">--Seleccione--</option>
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

export default Libro;
