import { BF, BFS, DFS, MSC } from "../utils";
import { getFormData } from "./";

export const handleSubmit = (evt: SubmitEvent) => {
  evt.preventDefault();

  const { ok, origen, destino, algoritmo, sentido } = getFormData(
    evt.target as HTMLFormElement
  );

  if (!ok) return;

  if (algoritmo === "BFS") BFS(origen, destino, sentido);
  else if (algoritmo === "DFS") DFS(origen, destino, sentido);
  else if (algoritmo === "MSC") MSC(origen, destino, sentido);
  else if (algoritmo === "BF") BF(origen, destino, sentido);
};
