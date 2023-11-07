import { grafo } from "../data";
import { type NodoRecorrido } from "../interfaces/types";
import { obtenerCosto } from "./";

export const obtenerMejorNodo = (
  nodoActual: NodoRecorrido,
  destino: string,
  sentido: string
) => {
  const conexiones = grafo[nodoActual.nombre].conexiones.map(
    (conexion) => conexion.destino
  );

  if (sentido === "anti-horario") conexiones.reverse();

  return conexiones
    .map((nodo) => ({ nombre: nodo, coste: obtenerCosto(nodo, destino) }))
    .filter((candidato) => candidato.coste < nodoActual.coste)
    .sort((candidato1, candidato2) => candidato1.coste - candidato2.coste)
    .shift()!;
};
