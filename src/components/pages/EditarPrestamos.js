import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';


const EditarPrestamos = ({prestamo}) => {
  const [estudiantes, setEstudiante] = useState([]);
  const [libro, setLibro] = useState([]);
      // Hook para redireccionar
   const navigate = useNavigate();

   //console.log(prestamo);
   
  const obtenerDatosEstudiantes = async () => {
    const url = `http://127.0.0.1:8000/api/estudiantes`;
    const response = await axios.get(url);
    console.log('response',response.data);
    setEstudiante(response.data);
}

useEffect(() => {
    obtenerDatosEstudiantes();
}, []);

const redireccionarEstudiantes = () => {
  const{data}=estudiantes;
    return (
        <>
            <select 
            id="estudiante_id"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.estudiante_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            >
                <option>-- Seleccione --</option>
                {data?.map((estudiante) => {
                    return (
                        <>
                            <option value={estudiante.codigoCarnet}>{estudiante.nombre}</option>
                        </>
                    );
                })}
            </select>
        </>
    );
};

//////////////////////////////

const obtenerDatosLibro = async () => {
  const url = `http://127.0.0.1:8000/api/libros`;
  const response = await axios.get(url);
  console.log('response',response.data);
  setLibro(response.data);
}

useEffect(() => {
  obtenerDatosLibro();
}, []);

const redireccionarLibro = () => {
const{data}=libro;
  return (
      <>
          <select 
          id="libro_id"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formik.values.libro_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          >
              <option>-- Seleccione --</option>
              {data?.map((libro) => {
                  return (
                      <>
                          <option value={libro.codigolibro}>{libro.titulo} </option>
                      </>
                  );
              })}
          </select>
      </>
  );
};

 // validación y leer los datos del formulario
 const formik = useFormik({
  initialValues: {
      id: prestamo.id,
      codigoPrestamo: prestamo.codigoPrestamo,
      estudiante_id: prestamo.estudiante_id,
      libro_id: prestamo.libro_id,
      fechaprestamo: prestamo.fechaprestamo,
      fechadevolucion: prestamo.fechadevolucion,
      fechaestadoprestamo: prestamo.fechaestadoprestamo,
    
  }, 
  validationSchema: Yup.object({
    codigoPrestamo: Yup.string()
        .required('El codigo es obligatorio'),

      estudiante_id: Yup.string()
        .required('El estudiante_id es obligatorio'),

      libro_id: Yup.string()
        .required('La cantidad de pagina son obligatorio'),

      fechaprestamo: Yup.string()
        .required('El campo de el prestamo es obligatorio'),

      fechadevolucion: Yup.string()
        .required('El año de publicacion es obligatorio'),

      fechaestadoprestamo: Yup.string()
        .required('La fechaestadoprestamo es obligatoria'),

}),
  onSubmit: prestamo => {
      try {   
          console.log(prestamo);
          let config={
            method:'put',
            url:`http://127.0.0.1:8000/api/prestamos/${prestamo.id}`,
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            data:prestamo
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
          navigate('/mostrarprestamos');
      } catch (error) {
          console.log(error);
      }
  }


});

  return (
    <>
    <h1 className="text-2xl font-light mb-4">Agregar Libros Prestamos</h1>
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-3xl ">

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigoPrestamo">codigo Prestamo</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="codigoPrestamo"
              type="text"
              placeholder="Código Prestamo"
              value={formik.values.codigoPrestamo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              readOnly="true"
            />
          </div>
          {formik.touched.codigoPrestamo && formik.errors.codigoPrestamo ? (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
              <p className="font-bold">Hubo un error:</p>
              <p>{formik.errors.codigoPrestamo} </p>
            </div>
          ) : null}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estudiante_id">Estudiante</label>
           {estudiantes && redireccionarEstudiantes()}
          </div>
         

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="libro_id">Libro</label>
           {libro && redireccionarLibro()}
          </div>
        


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaprestamo">Fecha de Prestamo</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaprestamo"
              type="date"
              value={formik.values.fechaprestamo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.fechaprestamo && formik.errors.fechaprestamo ? (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
              <p className="font-bold">Hubo un error:</p>
              <p>{formik.errors.fechaprestamo} </p>
            </div>
          ) : null}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechadevolucion">Fecha devolución</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechadevolucion"
              type="date"
              value={formik.values.fechadevolucion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.fechadevolucion && formik.errors.fechadevolucion ? (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
              <p className="font-bold">Hubo un error:</p>
              <p>{formik.errors.fechadevolucion} </p>
            </div>
          ) : null}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaestadoprestamo">Fecha estado de prestamo</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaestadoprestamo"
              type="date"
              value={formik.values.fechaestadoprestamo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.fechaestadoprestamo && formik.errors.fechaestadoprestamo ? (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
              <p className="font-bold">Hubo un error:</p>
              <p>{formik.errors.fechaestadoprestamo} </p>
            </div>
          ) : null}



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
 
export default EditarPrestamos;