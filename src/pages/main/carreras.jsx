import React from 'react';
import '../global.css';

const Carreras = () => {
    const carreras = [
        "Ing. Informática",
        "Ing. Industrial",
        "Ing. Materiales",
        "Educación mención Matemática",
        "Administración de Empresas",
        "Turismo",
        "Educación mención Lengua y Literatura",
        "Ing. Ambiental",
        "Lic. Bancas y Finanzas",
        "Educación mención Deporte y Recreación"
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl">Proyectos de carreras</h1>
            <div className="grid-container">
                {carreras.map((carrera, index) => (
                    <div key={index} className="card">
                        <h3 className="text-primary">{carrera}</h3>
                        <p className="text-gray-700">
                            Proyecto de carrera: {carrera}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carreras;