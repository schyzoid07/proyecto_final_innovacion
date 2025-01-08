import subjectsList from "../mocks/materias.json";
import { useState } from "react";

export default function useSubject() {
  const [materias] = useState(subjectsList.materias);

  /*usar fetch cuando esten listos los endpoints*/
  return { materias };
}
