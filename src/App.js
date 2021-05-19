
import { Routes, Route } from 'react-router';
import Estudiantes from './components/pages/Estudiantes';
import Inicio from './components/pages/Inicio';
import Sidebar from './components/ui/Sidebar';
import Libro from './components/pages/Libro';
import Prestamos from './components/pages/Prestamos';


function App() {
  return (
    <div className="md:flex min-h-screen">
    <Sidebar />
      <di className="md:w-3/5 xl:w-4/5">
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/libro" element={<Libro />} />
          <Route path="/Prestamos" element={<Prestamos />} />


        </Routes>
      </di>

    </div>
  );
}

export default App;
