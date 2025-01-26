import { Link } from "react-router-dom";
import "./DocenteCard.css";

export const DocenteCard = ({ nombre, apellido, cedula, correo, id }) => {
  return (
    <Link to={`${id}`}>
      <article className="docente-container">
        <p className="nombre-docente">{nombre}</p>
        <p className="nombre-docente">{apellido}</p>
        <p>Cédula: {cedula}</p>
        <p>
          Correo:
          {` ${correo}`}
        </p>
      </article>
    </Link>
  );
};
