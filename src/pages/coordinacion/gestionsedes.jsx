import React, { useState } from 'react';
import '../global.css';

const Gestionsedes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
        { id: 1, nombre: 'Avenida Atlantico' },
        { id: 2, nombre: 'Villa asia' },
        { id: 3, nombre: 'Chilemex' }
    ]);

    const [editData, setEditData] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newCarrera, setNewCarrera] = useState({
        id: '',
        nombre: '',
    });

    const filteredData = data.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = carrera => {
        setEditData(carrera);
    };

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id));
    };

    const handleAddCarrera = () => {
        if (newCarrera.id && newCarrera.nombre) {
            setData([...data, { ...newCarrera, id: Number(newCarrera.id) }]);
            setNewCarrera({ id: '', nombre: '' });
            setIsAddModalOpen(false);
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    const closeModal = () => {
        setEditData(null);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Gestión de Sedes</h1>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="custom-button"
                >
                    <i className="fas fa-plus icon-spacing"></i> Agregar Sede
                </button>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Filtrar por nombre"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded py-2 px-4 filtraciones"
                    />
                </div>
            </div>

            {editData && (
                <div className="modal-overlay-custom">
                    <div className="custom-card-edit">
                        <h2 className="custom-card-title">Editar Sede</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="mb-4 col-span-2">
                                <label className="custom-label-text">Nombre</label>
                                <input
                                    type="text"
                                    defaultValue={editData.nombre}
                                    className="custom-input-field"
                                />
                            </div>
                        </div>
                        <div className="custom-flex-card mt-4">
                            <button onClick={closeModal} className="custom-btn-save">
                                Guardar
                            </button>
                            <button onClick={closeModal} className="custom-btn-cancel ml-2">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isAddModalOpen && (
                <div className="modal-overlay-custom">
                    <div className="custom-card-edit">
                        <h2 className="custom-card-title">Agregar Sede</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="mb-4 col-span-2">
                                <label className="custom-label-text">Nombre</label>
                                <input
                                    type="text"
                                    value={newCarrera.nombre}
                                    onChange={e => setNewCarrera({ ...newCarrera, nombre: e.target.value })}
                                    className="custom-input-field"
                                />
                            </div>
                        </div>
                        <div className="custom-flex-card mt-4">
                            <button onClick={handleAddCarrera} className="custom-btn-save">
                                Guardar
                            </button>
                            <button onClick={() => setIsAddModalOpen(false)} className="custom-btn-cancel ml-2">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 mt-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Nombre</th>
                            <th className="py-3 px-6 text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredData.map(item => (
                            <tr key={item.id}>
                                <td className="py-3 px-6 border-b border-gray-200">{item.id}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.nombre}</td>
                                <td className="py-3 px-6 text-center border-b border-gray-200">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="btn-editar"
                                    >
                                        <i className="fas fa-edit mr-1"></i> Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="btn-eliminar"
                                    >
                                        <i className="fas fa-trash-alt mr-1"></i> Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Gestionsedes;
