import React from 'react';
import '../global.css';

const Sedes = () => {
    const sedes = [
        "Puerto Ordaz, Av. Atlántico",
        "Puerto Ordaz, Chilemex",
        "Puerto Ordaz, Villa Asia"
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl">Sedes disponibles</h1>
            <div className="grid-container">
                {sedes.map((sedes, index) => (
                    <div key={index} className="card">
                        <h3 className="text-primary">{sedes}</h3>
                        <p className="text-gray-700">
                            Sede: {sedes}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sedes;