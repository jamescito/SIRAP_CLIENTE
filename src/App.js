
import React, {useState} from 'react';
import { Routes, Route } from 'react-router';
import Estudiantes from './components/pages/Estudiantes';
import Inicio from './components/pages/Inicio';
import Sidebar from './components/ui/Sidebar';
import Libro from './components/pages/Libro';
import MostrarEstudiantes from './components/pages/MostrarEstudiantes';
import EditarEstudiantes from './components/pages/EditarEstudiantes';
function App() {
  const [estudiante, guardarEstudiante] = useState({});
  return (
    <div className="md:flex min-h-screen">
    <Sidebar />
      <div className="md:w-3/5 xl:w-4/5">
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/libro" element={<Libro />} />
          <Route path="/mostrarestudiantes" element={<MostrarEstudiantes guardarEstudiante={guardarEstudiante} />} />
          <Route path="/EditarEstudiantes" element={<EditarEstudiantes estudiante={estudiante} />} />

        </Routes>
      </div>

    </div>
  );
}

export default App;
