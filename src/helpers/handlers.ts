import { grafo } from "../data";
import { BF, BFS, DFS, MSC } from "../utils";

// Este elemento P se muestra si la informacion del nodo origen es erronea o invalida
const errorOrigen: HTMLParagraphElement =
  document.querySelector("#error-origen")!;
// Este elemento P se muestra si la informacion del nodo destino es erronea o invalida
const errorDestino: HTMLParagraphElement =
  document.querySelector("#error-destino")!;

/*
  Esta funcion se encarga de obtener y validar los datos del formulario
    form: Es el elemento FORM a partir del cual se obtendra la informacion ingresada por el usuario

  Retorna un objeto con la informacion del formulario y una propiedad llamada 'ok' que indica si la informacion
  paso o no la validacion (true si la paso, false si no la paso)
*/
const getFormData = (form: HTMLFormElement) => {
  // Obtenemos la informacion del formulario
  const { origen, destino, algoritmo, sentido } = Object.fromEntries(
    new FormData(form).entries()
  );

  // Verifica si el nodo origen ingresado por el usuario existe en el grafo
  if (!grafo[origen as string]) {
    // Inserta un mensaje de error dentro del elemento P
    errorOrigen.innerText = `El nodo ${origen} no existe en el grafo`;
    // Muestra el mensaje de error al usuario
    errorOrigen.classList.remove("hide");

    // Retornamos un objeto que indica un error
    return { ok: false, origen: "", destino: "", sentido: "", algoritmo: "" };
  }

  // Ocultamos el recuadro de mensaje de error del nodo origen si la validacion no encontro errores
  errorOrigen.classList.add("hide");

  // Verifica si el nodo destino ingresado por el usuario existe en el grafo
  if (!grafo[destino as string]) {
    // Inserta un mensaje de error dentro del elemento P
    errorDestino.innerText = `El nodo ${destino} no existe en el grafo`;
    // Muestra el mensaje de error al usuario
    errorDestino.classList.remove("hide");

    // Retornamos un objeto que indica un error
    return { ok: false, origen: "", destino: "", sentido: "", algoritmo: "" };
  }

  // Ocultamos el recuadro de mensaje de error del nodo destino si la validacion no encontro errores
  errorDestino.classList.add("hide");

  // Si las validacion no encuentran ningun error retornamos la informacion validada del formulario
  return {
    ok: true, // Indica que no hay errores
    origen: origen as string, // Indica el nodo origen
    destino: destino as string, // Indica el nodo destino
    sentido: sentido as string, // Indica el sentido de recorrido de los nodos conexion
    algoritmo: algoritmo as string, // Indica el algoritmo a utilizar
  };
};

/*
  Esta funcion se encarga de manejar el evento SUBMIT del formulario de la aplicacion y ejecutar el algoritmo de
  busqueda indicado por el usuario
    evt: Es el objeto SubmitEvent que contiene la informacion del evento

  No retorna nada
*/
export const handleSubmit = (evt: SubmitEvent) => {
  evt.preventDefault(); // Evitamos que el navegador recargue la pagina

  // Obtenemos la informacion del formulario
  const { ok, origen, destino, algoritmo, sentido } = getFormData(
    evt.target as HTMLFormElement
  );

  if (!ok) return; // Si la informacion no es valida salidamos de la funcion

  // Ejecutamos el algoritmo de busqueda indicado por el usuario
  if (algoritmo === "BFS") BFS(origen, destino, sentido);
  else if (algoritmo === "DFS") DFS(origen, destino, sentido);
  else if (algoritmo === "MSC") MSC(origen, destino, sentido);
  else if (algoritmo === "BF") BF(origen, destino, sentido);
};
