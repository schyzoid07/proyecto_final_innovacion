import React from 'react';

const Periodo = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Periodos académicos</h1>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <i className="fas fa-plus mr-2"></i> Agregar Período
                </a>
            </div>

            <div className="container mx-auto px-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Período</th>
                            <th className="py-3 px-6 text-left">Año inicio</th>
                            <th className="py-3 px-6 text-left">Año fin</th>
                            <th className="py-3 px-6 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        <tr>
                            <td className="py-3 px-6 border-b border-gray-200">2024-2025</td>
                            <td className="py-3 px-6 border-b border-gray-200">01-09-2024</td>
                            <td className="py-3 px-6 border-b border-gray-200">01-07-2025</td>
                            <td className="py-3 px-6 text-center border-b border-gray-200">
                                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
                                    <i className="fas fa-edit mr-1"></i> Editar
                                </a>
                                <a href="#" className="btn-eliminar hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs">
                                    <i className="fas fa-edit mr-1"></i> Eliminar
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-6 border-b border-gray-200">2025-2026</td>
                            <td className="py-3 px-6 border-b border-gray-200">01-09-2025</td>
                            <td className="py-3 px-6 border-b border-gray-200">01-07-2026</td>
                            <td className="py-3 px-6 text-center border-b border-gray-200">
                                <a href="#" className="btn-editar hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
                                    <i className="fas fa-edit mr-1"></i> Editar
                                </a>
                                <a href="#" className="btn-eliminar text-white font-bold py-1 px-2 rounded text-xs">
                                    <i className="fas fa-edit mr-1"></i> Eliminar
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Periodo;
