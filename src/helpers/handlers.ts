import { grafo } from "../data";
import { BF, BFS, DFS, MSC } from "../utils";

const errorOrigen: HTMLParagraphElement =
  document.querySelector("#error-origen")!;
const errorDestino: HTMLParagraphElement =
  document.querySelector("#error-destino")!;

const getFormData = (form: HTMLFormElement) => {
  const { origen, destino, algoritmo, sentido } = Object.fromEntries(
    new FormData(form).entries()
  );

  if (!grafo[origen as string]) {
    errorOrigen.innerText = `El nodo ${origen} no existe en el grafo`;
    errorOrigen.classList.remove("hide");

    return { ok: false, origen: "", destino: "", sentido: "", algoritmo: "" };
  }

  errorOrigen.classList.add("hide");

  if (!grafo[destino as string]) {
    errorDestino.innerText = `El nodo ${destino} no existe en el grafo`;
    errorDestino.classList.remove("hide");

    return { ok: false, origen: "", destino: "", sentido: "", algoritmo: "" };
  }

  errorDestino.classList.add("hide");

  return {
    ok: true,
    origen: origen as string,
    destino: destino as string,
    sentido: sentido as string,
    algoritmo: algoritmo as string,
  };
};

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
