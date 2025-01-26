import { useParams } from "react-router-dom";
import useProfessor from "../hooks/useProfessor";
export default function DocenteHorario() {
  const { professorId } = useParams();
  const { professors } = useProfessor();

  return (
    <>
      <h2 className="nombre-docente">{`${professors[professorId - 1].nombre} ${
        professors[professorId - 1].apellido
      }`}</h2>
      <p>{professors[professorId - 1].cedula}</p>
      <p>{professors[professorId - 1].correo}</p>
    </>
  );
}
