import React, { useState } from 'react';
import '../global.css';

const GestionHorarios = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCarrera, setSelectedCarrera] = useState('');

    const handleCrearHorario = () => {
        if (!selectedCarrera) {
            alert('Por favor, seleccione una carrera.');
        } else {
            alert(`Horario creado para: ${selectedCarrera}`);
            setIsModalOpen(false); // Cierra el modal después de crear el horario
            setSelectedCarrera(''); // Limpia la selección
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCarrera(''); // Limpia la selección al cerrar
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Gestión de Horarios</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="custom-button"
                >
                    Crear Horario
                </button>
            </div>

            {isModalOpen && (
                <div className="modal-overlay-custom">
                    <div className="custom-card-edit">
                        <h2 className="custom-card-title">Crear Horario</h2>
                        <div className="mb-4">
                            <label className="custom-label-text" htmlFor="carrera-select">
                                Proyecto de carrera a generar
                            </label>
                            <select
                                id="carrera-select"
                                value={selectedCarrera}
                                onChange={e => setSelectedCarrera(e.target.value)}
                                className="custom-input-field"
                            >
                                <option value="">Seleccione una carrera</option>
                                <option value="Ingeniería Informática">Ingeniería Informática</option>
                                <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                                <option value="Ingeniería en Materiales">Ingeniería en Materiales</option>
                            </select>
                        </div>
                        <div className="custom-flex-card mt-4">
                            <button onClick={handleCrearHorario} className="custom-btn-save">
                                Crear
                            </button>
                            <button onClick={closeModal} className="custom-btn-cancel ml-2">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GestionHorarios;
