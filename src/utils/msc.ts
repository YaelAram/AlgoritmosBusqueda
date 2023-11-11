import {
  creaTablaSolucionMsc,
  obtenerCosto,
  obtenerMejorNodo,
} from "../helpers";
import { NodoRecorrido } from "../interfaces/types";

/*
  Esta funcion contiene el Algoritmo de Maxima Pendiente
    origen: Nombre del nodo origen
    destino: Nombre del nodo destino
    sentido: Sentido en cual se deben recorrer los nodos conexion
  
  No retorna nada
*/
export const MSC = (origen: string, destino: string, sentido: string) => {
  // Iniciamos un lista con todos los nodos que pertenecen a la ruta que conecta el nodo origen y destino
  const ruta: string[] = [origen];
  // Contiene los nodos en el orden en el que fueron recorridos
  const tabla: NodoRecorrido[] = [];
  // Contiene la informacion del nodo actual
  let nodoActual: NodoRecorrido = {
    nombre: origen,
    coste: obtenerCosto(origen, destino),
  };

  // Agregamos el nodo actual a la lista de nodos recorridos
  tabla.push(nodoActual);

  // Iteramos mientras el nombre del nodo actual sea diferente al nombre del nodo destino
  while (nodoActual.nombre !== destino) {
    // Obtenemos el nodo conexion cuyo costo total para ir al nodo destino sea el menor de todos
    const mejorNodo = obtenerMejorNodo(nodoActual, destino, sentido);

    // Si el mejor nodo es undefined (no existe)
    if (mejorNodo === undefined) {
      // Mostramos la ruta parcial y un mensaje indicando que no hay ruta que conecte el nodo origen y el destino
      creaTablaSolucionMsc(
        tabla,
        `No existe camino posible entre el nodo ${origen} (origen) y el nodo ${destino} (destino)`
      );

      // Salimos del bucle while
      break;
    }

    // Agregamos a la lista ruta el mejor nodo
    ruta.push(mejorNodo.nombre);

    // Agregamos a la lista de nodos visitados el mejor nodo
    tabla.push(mejorNodo);

    // Hacemos que el nodo actual sea el mejor nodo
    nodoActual = mejorNodo;
  }

  // Mostramos la informacion calculada durante el algoritmo
  creaTablaSolucionMsc(tabla, ruta.join(" → "));
};
