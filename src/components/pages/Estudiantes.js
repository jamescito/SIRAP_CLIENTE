import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Estudiantes = () => {

    // Hook para redireccionar
    const navigate = useNavigate();

    const [carreras, setCarreras] = useState([]);

    const obtenerDatoscarrera = async () => {
        const url = `http://127.0.0.1:8000/api/carreras`;
        const response = await axios.get(url);
        console.log('response',response.data);
        setCarreras(response.data);
    }

    useEffect(() => {
        obtenerDatoscarrera();
    }, []);

    const redireccionarCarrera = () => {
        return (
            <>
                <select 
                id="carrera_id"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.carrera_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option>-- Seleccione --</option>
                    {carreras?.map((carrera) => {
                        return (
                            <>
                                <option value={carrera.codigoCarrera}>{carrera.carrera}</option>
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
            codigoCarnet: '',
            nombre: '',
            apellido: '',
            carrera_id: '',

        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required('El Nombre del estudiantes es obligatorio'),
            codigoCarnet: Yup.string()
                .required('El Precio es obligatorio'),
            apellido: Yup.string()
                .required('Los apellidos son obligatoria'),

        }),
        onSubmit: estudiante => {
            try {
                let config = {
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/estudiantes',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    data: estudiante
                };
                console.log(estudiante);
                console.log(config);

                axios(config)
                    .then(response => console.log(response.data))
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response)
                        }
                    });

                // Redireccionar
                navigate('/mostrarestudiantes');
            } catch (error) {
                console.log(error);
            }
        }


    });



    return (
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Estudiantes</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigoCarnet">codigo Carnet</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="codigoCarnet"
                                type="text"
                                placeholder="Codigo Carnet"
                                value={formik.values.codigoCarnet}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.codigoCarnet && formik.errors.codigoCarnet ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.codigoCarnet} </p>
                            </div>
                        ) : null}


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.nombre} </p>
                            </div>
                        ) : null}


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">Apellido</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="apellido"
                                type="text"
                                placeholder="apellido"
                                value={formik.values.apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        {formik.touched.apellido && formik.errors.apellido ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.apellido} </p>
                            </div>
                        ) : null}



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carrera">Codigo carrera</label>
                            {carreras && redireccionarCarrera()}
                        </div>
                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar Estudiantes"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Estudiantes;