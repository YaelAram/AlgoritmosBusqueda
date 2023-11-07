import {
  creaTablaSolucionMscBf,
  obtenerCosto,
  obtenerMejorNodo,
} from "../helpers";
import { NodoRecorrido } from "../interfaces/types";

export const MSC = (origen: string, destino: string, sentido: string) => {
  const ruta: string[] = [origen];
  const tabla: NodoRecorrido[] = [];
  let nodoActual: NodoRecorrido = {
    nombre: origen,
    coste: obtenerCosto(origen, destino),
  };

  tabla.push(nodoActual);

  while (nodoActual.nombre !== destino) {
    const mejorNodo = obtenerMejorNodo(nodoActual, destino, sentido);

    if (mejorNodo === undefined) break;

    ruta.push(mejorNodo.nombre);

    tabla.push(mejorNodo);
    nodoActual = mejorNodo;
  }

  creaTablaSolucionMscBf(tabla, ruta.join(" → "));
};
