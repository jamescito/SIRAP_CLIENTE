
import React, {useState} from 'react';
import { Routes, Route } from 'react-router';
import Estudiantes from './components/pages/Estudiantes';
import Inicio from './components/pages/Inicio';
import Sidebar from './components/ui/Sidebar';
import Libro from './components/pages/Libro';
import Prestamos from './components/pages/Prestamos';
import MostrarEstudiantes from './components/pages/MostrarEstudiantes';
import EditarEstudiantes from './components/pages/EditarEstudiantes';
import MostrarLibros from './components/pages/MostrarLibros';
import EditarLibros from './components/pages/EditarLibros';
import MostrarPrestamos from './components/pages/MostrarPrestamos';
import EditarPrestamos from './components/pages/EditarPrestamos';

function App() {
  const [estudiante, guardarEstudiante] = useState({});
  const [libro, guardarLibro] = useState({});
  const [prestamo, guardarPrestamo] = useState({});

  return (
    <div className="md:flex min-h-screen">
    <Sidebar />
      <div className="md:w-9/12 xl:w-9/12">
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          
          <Route path="/Prestamos" element={<Prestamos />} />
          <Route path="/mostrarprestamos" element={<MostrarPrestamos  guardarPrestamo={guardarPrestamo}/>} />
          <Route path="/EditarPrestamos" element={<EditarPrestamos  prestamo={prestamo}/>} />
          
          
        <Route path="/libro" element={<Libro />} />
        <Route path="/mostrarlibros" element={<MostrarLibros guardarLibro={guardarLibro} />} />
        <Route path="/Editarlibros" element={<EditarLibros libro={libro} />} />
        
        
          
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/mostrarestudiantes" element={<MostrarEstudiantes guardarEstudiante={guardarEstudiante} />} />
          <Route path="/EditarEstudiantes" element={<EditarEstudiantes estudiante={estudiante} />} />




        </Routes>
      </div>

    </div>
  );
}

export default App;
