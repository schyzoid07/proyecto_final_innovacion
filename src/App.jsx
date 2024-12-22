import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './pages/sidebar';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Periodo from './pages/main/periodos';
import Secciones from './pages/main/secciones';
import Docentes from './pages/main/docentes';
import Materias from './pages/main/materias';
import Carreras from './pages/main/carreras';
import Sedes from './pages/main/sedes';
import Gestiondocente from './pages/coordinacion/gestiondocente';
import Gestionmateria from './pages/coordinacion/gestionmateria';
import Gestioncarrera from './pages/coordinacion/gestioncarrera';
import Gestionsedes from './pages/coordinacion/gestionsedes';
import Generarhorario from './pages/coordinacion/generarhorario';
import './App.css';

const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}>
                <Sidebar />
                <div
                    style={{
                        marginLeft: '250px',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Navbar />
                    <div style={{ flex: 1, padding: '20px' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/periodo" element={<Periodo />} />
                            <Route path="/secciones" element={<Secciones />} />
                            <Route path="/docentes" element={<Docentes />} />
                            <Route path="/materias" element={<Materias />} />
                            <Route path="/carreras" element={<Carreras />} />
                            <Route path="/sedes" element={<Sedes />} />
                            <Route path="/gestionar-docente" element={<Gestiondocente />} />
                            <Route path="/gestionar-materias" element={<Gestionmateria />} />
                            <Route path="/gestionar-carreras" element={<Gestioncarrera />} />
                            <Route path="/gestionar-sedes" element={<Gestionsedes />} />
                            <Route path="/generar-horario" element={<Generarhorario />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;