import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Home from './pages/home';
import Periodo from './pages/periodo';
import Secciones from './pages/secciones';
import Docentes from './pages/docentes';
import Materias from './pages/materias';
import Carreras from './pages/carreras';
import Sedes from './pages/sedes';
import './App.css';

const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}>
                <Sidebar />
                
                <div style={{ marginLeft: '250px', flex: 1, display: 'flex', flexDirection: 'column' }}>
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
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;