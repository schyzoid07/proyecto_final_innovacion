import sectionsList from "../mocks/secciones.json";
import { useState } from "react";

export default function useProfessor() {
  const [secciones] = useState(sectionsList.secciones);

  /*usar fetch cuando esten listos los endpoints*/
  return { secciones };
}
