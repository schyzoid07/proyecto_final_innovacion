import React, { useState } from 'react';
import '../global.css';

const Gestonmateria = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
        { id: 1001, nombre: 'Tecnicas de Programacion I', semestre: '2', carrera: 'Ingenieria Informatica' },
        { id: 1005, nombre: 'Finanzas para Ingenieros', semestre: '5,6', carrera: 'Ingenieria Informatica, Ingenieria Industrial' },
        { id: 1013, nombre: 'Fisica II', semestre: '3', carrera: 'Ingenieria Informatica, Ingenieria Industria, Ingenieria en Materiales' },
        { id: 1023, nombre: 'Estadistica I', semestre: '2,4,5', carrera: 'Ingenieria Informatica, Ingenieria Industrial, Ingenieria en Materiales, Contabilidad Bancas y Finanzas, Administracion de Empresas, Educacion mencion Lenguaje, Educacion mencion Matematicas' },
    ]);
    const [editData, setEditData] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newDocente, setNewDocente] = useState({
        id: '',
        nombre: '',
        semestre: '',
        carrera: '',
    });

    const filteredData = data.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = docente => {
        setEditData(docente);
    };

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id));
    };

    const handleAddDocente = () => {
        if (newDocente.id && newDocente.nombre && newDocente.semestre && newDocente.carrera) {
            setData([...data, { ...newDocente, id: Number(newDocente.id) }]);
            setNewDocente({ id: '', nombre: '', semestre: '', carrera: '' });
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
                <h1 className="text-2xl">Gestión de Unidades Curriculares</h1>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="custom-button"
                >
                    <i className="fas fa-plus icon-spacing"></i> Agregar Unidad Curricular
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
                        <h2 className="custom-card-title">Editar Unidad Curricular</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="mb-4">
                                <label className="custom-label-text">Nombre</label>
                                <input
                                    type="text"
                                    defaultValue={editData.id}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Semestre</label>
                                <input
                                    type="text"
                                    defaultValue={editData.nombre}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Carrera</label>
                                <input
                                    type="text"
                                    defaultValue={editData.semestre}
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
                        <h2 className="custom-card-title">Agregar Unidad Curricular</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="mb-4">
                                <label className="custom-label-text">Nombre</label>
                                <input
                                    type="text"
                                    value={newDocente.id}
                                    onChange={e => setNewDocente({ ...newDocente, id: e.target.value })}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Semestre</label>
                                <input
                                    type="text"
                                    value={newDocente.nombre}
                                    onChange={e => setNewDocente({ ...newDocente, nombre: e.target.value })}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Carrera</label>
                                <input
                                    type="text"
                                    value={newDocente.semestre}
                                    onChange={e => setNewDocente({ ...newDocente, semestre: e.target.value })}
                                    className="custom-input-field"
                                />
                            </div>
                        </div>
                        <div className="custom-flex-card mt-4">
                            <button onClick={handleAddDocente} className="custom-btn-save">
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
                            <th className="py-3 px-6 text-left">Semestre</th>
                            <th className="py-3 px-6 text-center">Carrera</th>
                            <th className="py-3 px-6 text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredData.map(item => (
                            <tr key={item.id}>
                                <td className="py-3 px-6 border-b border-gray-200">{item.id}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.nombre}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.semestre}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.carrera}</td>
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

export default Gestonmateria;
