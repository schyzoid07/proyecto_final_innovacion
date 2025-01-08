import carrersList from "../mocks/careers.json";
import { useState } from "react";

export default function useProfessor() {
  const [carreras] = useState(carrersList.carreras);

  /*usar fetch cuando esten listos los endpoints*/
  return { carreras };
}
