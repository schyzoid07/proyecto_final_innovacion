import "./DocentesList.css";
import useProfessor from "../hooks/useProfessor";
import { DocenteCard } from "./DocenteCard";

export const DocentesList = () => {
  const { professors } = useProfessor();

  return (
    <section className="docentesList-container">
      {professors.map((docente) => (
        <DocenteCard
          key={docente.id}
          id={docente.id}
          name={docente.nombre}
          apellido={docente.apellido}
          correo={docente.correo}
          cedula={docente.cedula}
        />
      ))}
    </section>
  );
};
