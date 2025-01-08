import React, { useState } from "react";
import "../global.css";
import useSection from "../../hooks/useSection";

const Secciones = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { secciones } = useSection();

  const filteredData = secciones.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Secciones disponibles</h1>
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <i className="fas fa-plus mr-2"></i> Agregar Sección
        </a>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Filtrar por nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 filtraciones"
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Sección</th>
              <th className="py-3 px-6 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-6 border-b border-gray-200">
                  {item.id}
                </td>
                <td className="py-3 px-6 border-b border-gray-200">
                  {item.nombre}
                </td>
                <td className="py-3 px-6 border-b border-gray-200">
                  {item.seccion}
                </td>
                <td className="py-3 px-6 text-center border-b border-gray-200">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
                  >
                    <i className="fas fa-edit mr-1"></i> Editar
                  </a>
                  <a
                    href="#"
                    className="btn-eliminar hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                  >
                    <i className="fas fa-trash-alt mr-1"></i> Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Secciones;
