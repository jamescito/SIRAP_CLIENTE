import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';

const EditarLibros = ({libro}) => {
    const [areas, setAreas] = useState([]);
    const [editorial, setEditorial] = useState([]);
  // Hook para redireccionar
   const navigate = useNavigate();

   const obtenerDatosAreas = async () => {
    const url = `https://afternoon-caverns-98117.herokuapp.com/api/areas`;
    const response = await axios.get(url);
    console.log('response',response.data);
    setAreas(response.data);
}

useEffect(() => {
    obtenerDatosAreas();
}, []);

const redireccionarArea = () => {
    return (
        <>
            <select 
            id="area_id"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.area_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            >
                <option>-- Seleccione --</option>
                {areas?.map((areas) => {
                    return (
                        <>
                            <option value={areas.codigoArea}>{areas.area}</option>
                        </>
                    );
                })}
            </select>
        </>
    );
};
///////////////////////
const obtenerDatosEditoriales = async () => {
const url = `https://afternoon-caverns-98117.herokuapp.com/api/editoriales`;
const response = await axios.get(url);
console.log('response',response.data);
setEditorial(response.data);
}

useEffect(() => {
obtenerDatosEditoriales();
}, []);

const redireccionarEditoriales = () => {
return (
    <>
        <select 
        id="editoriales_id"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={formik.values.editoriales_id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        >
            <option>-- Seleccione --</option>
            {editorial?.map((editoriales) => {
                return (
                    <>
                        <option value={editoriales.codigoEditorial}>{editoriales.editorial}</option>
                    </>
                );
            })}
        </select>
    </>
);
};

   console.log(libro);
 // validación y leer los datos del formulario
 const formik = useFormik({
  initialValues: {
      id: libro.id,
      codigolibro: libro.codigolibro,
      titulo: libro.titulo,
      cantidadpaginas: libro.cantidadpaginas,
      libroOriginal: libro.libroOriginal,
      aniopublicacion: libro.aniopublicacion,
      idioma: libro.idioma,
      area_id: libro.area_id,
      editoriales_id: libro.editoriales_id,
    
  }, 
  validationSchema: Yup.object({
    codigolibro: Yup.string()
        .required('El codigo es obligatorio'),

    titulo: Yup.string()
        .required('El titulo es obligatorio'),

    cantidadpaginas: Yup.string()
        .required('La cantidad de pagina son obligatorio'),

    libroOriginal: Yup.string()
        .required('El campo de el libro es obligatorio'),

    aniopublicacion: Yup.string()
        .required('El año de publicacion es obligatorio'),

    idioma: Yup.string()
        .required('La idioma es obligatoria'),

    area_id: Yup.string()
        .required('El codigo de area es obligatorio'),

    editoriales_id: Yup.string()
        .required('El editorial es obligatorio'),

}),
  onSubmit: libro => {
      try {   
          console.log(libro);
          let config={
            method:'put',
            url:`https://afternoon-caverns-98117.herokuapp.com/api/libros/${libro.id}`,
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            data:libro
          };
          console.log(config);

          axios(config)
                  .then(response => console.log(response.data))
                  .catch(error =>{
                    if(error.response){
                      console.log(error.response)
                    }
                  });

          // Redireccionar
          navigate('/mostrarlibros');
      } catch (error) {
          console.log(error);
      }
  }


});

  return (
    <>
    <h1 className="text-2xl font-light mb-4">Actualizar Libros</h1>
    <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl ">

            <form onSubmit={formik.handleSubmit} >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigolibro">Codigo libro</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="codigolibro"
                        type="text"
                        placeholder="Codigo libro"
                        value={formik.values.codigolibro}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        readOnly="true"
                    />
                </div>
                {formik.touched.codigolibro && formik.errors.codigolibro ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                        <p className="font-bold">Hubo un error:</p>
                        <p>{formik.errors.codigolibro} </p>
                    </div>
                ) : null}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">Titulo</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="titulo"
                        type="text"
                        placeholder="Titulo"
                        value={formik.values.titulo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.titulo && formik.errors.titulo ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                        <p className="font-bold">Hubo un error:</p>
                        <p>{formik.errors.titulo} </p>
                    </div>
                ) : null}


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidadpaginas">Cantidad de paginas</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cantidadpaginas"
                        type="number"
                        min="0"
                        placeholder="Cantidad de paginas"
                        value={formik.values.cantidadpaginas}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.cantidadpaginas && formik.errors.cantidadpaginas ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                        <p className="font-bold">Hubo un error:</p>
                        <p>{formik.errors.cantidadpaginas} </p>
                    </div>
                ) : null}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="libroOriginal">Originalidad de libro</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="libroOriginal"
                        type="text"
                        value={formik.values.libroOriginal}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">--Seleccione--</option>
                        <option value="Original">Original</option>
                        <option value="Copia">Copia</option>
                    </select>
                </div>
                {formik.touched.libroOriginal && formik.errors.libroOriginal ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                        <p className="font-bold">Hubo un error:</p>
                        <p>{formik.errors.libroOriginal} </p>
                    </div>
                ) : null}


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aniopublicacion">Año de publicacion</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="aniopublicacion"
                        type="date"
                        value={formik.values.aniopublicacion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.aniopublicacion && formik.errors.aniopublicacion ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                        <p className="font-bold">Hubo un error:</p>
                        <p>{formik.errors.aniopublicacion} </p>
                    </div>
                ) : null}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idioma">Escrito en la idioma</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="idioma"
                        type="text"
                        value={formik.values.idioma}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">--Seleccione--</option>
                        <option value="español">Español</option>
                        <option value="ingles">Ingles</option>
                        <option value="italiono">Italiano</option>
                    </select>
                </div>
                {formik.touched.idioma && idioma ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                        <p className="font-bold">Hubo un error:</p>
                        <p>{formik.errors.idioma} </p>
                    </div>
                ) : null}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area_id">Codigo area</label>
                {areas && redireccionarArea()}
                        
                    
                </div>
           

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editoriales_id">Codigo editoriales</label>
                  {editorial && redireccionarEditoriales()}      
                    
                </div>
             

                <input
                    className="bg-gray-800 hover:bg-gray-900  w-full mt-5 p-2 text-white uppercase font-bold"
                    type="submit"
                    value="Actualizar"
                />
            </form>



        </div>
    </div>
</>
  );
}

export default EditarLibros;