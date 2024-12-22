import React, { useState } from 'react';
import '../global.css';

const Docentes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
        { cedula: 1578965, nombre: 'OSCAR ALEXIS', apellido: 'SALAZAR BERMUDEZ', correo: 'oscar2350@hotmail.com' },
        { cedula: 21421423, nombre: 'JESUS MANUEL', apellido: 'RONDON FLORES', correo: 'jesusrondon@uneg.edu.ve' },
        { cedula: 18657821, nombre: 'CLINIA MERSICA', apellido: 'CORDERO SOFFIA', correo: 'corderoclinia@gmail.com' },
        { cedula: 20014235, nombre: 'NELSON', apellido: 'INOJOSA', correo: 'ninojosa@uneg.edu.ve' },
    ]);

    const filteredData = data.filter(item =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Listado de Docentes</h1>
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

            <div className="container mx-auto px-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Cédula</th>
                            <th className="py-3 px-6 text-left">Nombres</th>
                            <th className="py-3 px-6 text-left">Apellidos</th>
                            <th className="py-3 px-6 text-center">Correo</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {filteredData.map(item => (
                            <tr key={item.id}>
                                <td className="py-3 px-6 border-b border-gray-200">{item.cedula}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.nombre}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.apellido}</td>
                                <td className="py-3 px-6 border-b border-gray-200">{item.correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Docentes;