import { grafo } from "../data";

const errorOrigen: HTMLParagraphElement =
  document.querySelector("#error-origen")!;
const errorDestino: HTMLParagraphElement =
  document.querySelector("#error-destino")!;

export const getFormData = (form: HTMLFormElement) => {
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
