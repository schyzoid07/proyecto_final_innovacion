import professorsList from "../mocks/docentes.json";
import { useState } from "react";

export default function useProfessor() {
  const [professors] = useState(professorsList.docentes);

  /*usar fetch cuando esten listos los endpoints*/
  return { professors };
}
