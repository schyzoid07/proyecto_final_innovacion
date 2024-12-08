import React from 'react';
import './global.css';

const Periodo = () => {
    return (
        <div>
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl">Periodos académicos</h1>
        <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <i class="fas fa-plus mr-2"></i> Agregar Período
        </a>
    </div>

    <div class="container mx-auto px-4"> 
        <table class="table-auto w-full">
            <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-left">Período</th>
                    <th class="py-3 px-6 text-left">Año inicio</th>
                    <th class="py-3 px-6 text-left">Año fin</th>
                    <th class="py-3 px-6 text-center">Acciones</th> 
                </tr>
            </thead>
            <tbody class="text-gray-800">
                <tr> 
                    <td class="py-3 px-6 border-b border-gray-200">2024-2025</td>
                    <td class="py-3 px-6 border-b border-gray-200">01-09-2024</td>
                    <td class="py-3 px-6 border-b border-gray-200">01-07-2025</td>
                    <td class="py-3 px-6 text-center border-b border-gray-200">
                        <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
                            <i class="fas fa-edit mr-1"></i> Editar
                        </a>
                        <a href="#" class="btn-eliminar hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs">
                            <i class="fas fa-edit mr-1"></i> Eliminar
                        </a>
                    </td>
                </tr>
                <tr> 
                    <td class="py-3 px-6 border-b border-gray-200">2025-2026</td>
                    <td class="py-3 px-6 border-b border-gray-200">01-09-2025</td>
                    <td class="py-3 px-6 border-b border-gray-200">01-07-2026</td>
                    <td class="py-3 px-6 text-center border-b border-gray-200">
                        <a href="#" class="btn-editar hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs">
                            <i class="fas fa-edit mr-1"></i> Editar
                        </a>
                        <a href="#" class="btn-eliminar text-white font-bold py-1 px-2 rounded text-xs">
                            <i class="fas fa-edit mr-1"></i> Eliminar
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