// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../global.css";
import useSubject from "../../hooks/useSubject";

const Materias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { materias } = useSubject();

  const filteredData = materias.filter((item) =>
    item.carrera.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Asignaturas totales</h1>
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
              <th className="py-3 px-6 text-left">Semestre</th>
              <th className="py-3 px-6 text-left">Carrera</th>
              <th className="py-3 px-6 text-left">Total secciones </th>
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
                <td className="py-3 px-6 border-b border-gray-200">
                  {item.carrera}
                </td>
                <td className="py-3 px-6 border-b border-gray-200">
                  {item.cantidad}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Materias;
