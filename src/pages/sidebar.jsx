import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserTie, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <div className="sidebar-divider"></div>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => toggleSection('main')}>
                            <FontAwesomeIcon icon={faHome} /> Main{' '}
                            <span className="arrow">{activeSection === 'main' ? '︿' : '﹀'}</span>
                        </button>
                        <ul className={`submenu ${activeSection === 'main' ? 'open' : ''}`}>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/periodo">Periodo</Link></li>
                            <li><Link to="/secciones">Secciones</Link></li>
                            <li><Link to="/docentes">Docentes</Link></li>
                            <li><Link to="/materias">Materias</Link></li>
                            <li><Link to="/carreras">Carreras</Link></li>
                            <li><Link to="/sedes">Sedes</Link></li>
                        </ul>
                        <div className="sidebar-divider"></div>
                    </li>

                    <li>
                        <button onClick={() => toggleSection('coordinador')}>
                            <FontAwesomeIcon icon={faUserTie} /> Coordinador{' '}
                            <span className="arrow">{activeSection === 'coordinador' ? '︿' : '﹀'}</span>
                        </button>
                        <ul className={`submenu ${activeSection === 'coordinador' ? 'open' : ''}`}>
                            <li><Link to="/generar-horario">Generar Horario</Link></li>
                            <li><Link to="/gestionar-docente">Gestionar Docente</Link></li>
                            <li><Link to="/gestionar-materias">Gestionar Materias</Link></li>
                            <li><Link to="/gestionar-carreras">Gestionar Carreras</Link></li>
                            <li><Link to="/gestionar-sedes">Gestionar Sedes</Link></li>
                        </ul>
                        <div className="sidebar-divider"></div>
                    </li>

                    <li>
                        <button onClick={() => toggleSection('docente')}>
                            <FontAwesomeIcon icon={faChalkboardTeacher} /> Docente{' '}
                            <span className="arrow">{activeSection === 'docente' ? '︿' : '﹀'}</span>
                        </button>
                        <ul className={`submenu ${activeSection === 'docente' ? 'open' : ''}`}>
                            <li><Link to="/disponibilidad-docente">Disponibilidad Docente</Link></li>
                        </ul>
                        <div className="sidebar-divider"></div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

console.log('Sidebar Loaded');

export default Sidebar;