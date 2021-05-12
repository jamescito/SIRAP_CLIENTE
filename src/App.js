
import {Routes, Route} from 'react-router';
import Estudiantes from './components/pages/Estudiantes';
import Inicio from './components/pages/Inicio';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/estudiantes" element={Estudiantes} />
      </Routes>
    </div>
  );
}

export default App;
