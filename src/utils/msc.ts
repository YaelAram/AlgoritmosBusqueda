import {
  creaTablaSolucionMsc,
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

    if (mejorNodo === undefined) {
      creaTablaSolucionMsc(
        tabla,
        `No existe camino posible entre el nodo ${origen} (origen) y el nodo ${destino} (destino)`
      );
      break;
    }

    ruta.push(mejorNodo.nombre);

    tabla.push(mejorNodo);
    nodoActual = mejorNodo;
  }

  creaTablaSolucionMsc(tabla, ruta.join(" → "));
};
