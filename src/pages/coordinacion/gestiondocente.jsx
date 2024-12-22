import React, { useState } from 'react';
import '../global.css';

const Gestiondocente = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
        { cedula: 1578965, nombre: 'OSCAR ALEXIS', apellido: 'SALAZAR BERMUDEZ', correo: 'oscar2350@hotmail.com' },
        { cedula: 21421423, nombre: 'JESUS MANUEL', apellido: 'RONDON FLORES', correo: 'jesusrondon@uneg.edu.ve' },
        { cedula: 18657821, nombre: 'CLINIA MERSICA', apellido: 'CORDERO SOFFIA', correo: 'corderoclinia@gmail.com' },
        { cedula: 20014235, nombre: 'NELSON', apellido: 'INOJOSA', correo: 'ninojosa@uneg.edu.ve' },
    ]);
    const [editData, setEditData] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newDocente, setNewDocente] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        correo: '',
    });

    const filteredData = data.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = docente => {
        setEditData(docente);
    };

    const handleDelete = cedula => {
        setData(data.filter(item => item.cedula !== cedula));
    };

    const handleAddDocente = () => {
        if (newDocente.cedula && newDocente.nombre && newDocente.apellido && newDocente.correo) {
            setData([...data, { ...newDocente, cedula: Number(newDocente.cedula) }]);
            setNewDocente({ cedula: '', nombre: '', apellido: '', correo: '' });
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
                <h1 className="text-2xl">Gestión de Docentes</h1>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="custom-button"
                >
                    <i className="fas fa-plus icon-spacing"></i> Agregar Docente
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
                        <h2 className="custom-card-title">Editar Docente</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="mb-4">
                                <label className="custom-label-text">Cédula</label>
                                <input
                                    type="text"
                                    defaultValue={editData.cedula}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Nombre</label>
                                <input
                                    type="text"
                                    defaultValue={editData.nombre}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Apellido</label>
                                <input
                                    type="text"
                                    defaultValue={editData.apellido}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="col-span-2 mb-4">
                                <label className="custom-label-text">Correo</label>
                                <input
                                    type="email"
                                    defaultValue={editData.correo}
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
                        <h2 className="custom-card-title">Agregar Docente</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="mb-4">
                                <label className="custom-label-text">Cédula</label>
                                <input
                                    type="text"
                                    value={newDocente.cedula}
                                    onChange={e => setNewDocente({ ...newDocente, cedula: e.target.value })}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Nombre</label>
                                <input
                                    type="text"
                                    value={newDocente.nombre}
                                    onChange={e => setNewDocente({ ...newDocente, nombre: e.target.value })}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="custom-label-text">Apellido</label>
                                <input
                                    type="text"
                                    value={newDocente.apellido}
                                    onChange={e => setNewDocente({ ...newDocente, apellido: e.target.value })}
                                    className="custom-input-field"
                                />
                            </div>
                            <div className="col-span-2 mb-4">
                                <label className="custom-label-text">Correo</label>
                                <input
                                    type="email"
                                    value={newDocente.correo}
                                    onChange={e => setNewDocente({ ...newDocente, correo: e.target.value })}
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
                            <th className="py-3 px-6 text-left">Cédula</th>
                            <th className="py-3 px-6 text-left">Nombres</th>
                            <th className="py-3 px-6 text-left">Apellidos</th>
                            <th className="py-3 px-6 text-center">Correo</th>
                            <th className="py-3 px-6 text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredData.map(item => (
                            <tr key={item.cedula}>
                                <td className="py-3 px-6 border-b border-gray-200">{item.cedula}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.nombre}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.apellido}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.correo}</td>
                                <td className="py-3 px-6 text-center border-b border-gray-200">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="btn-editar"
                                    >
                                        <i className="fas fa-edit mr-1"></i> Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.cedula)}
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

export default Gestiondocente;
