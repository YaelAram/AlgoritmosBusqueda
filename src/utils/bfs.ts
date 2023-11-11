import { crearTablaSolucionBfsDfs, obtenerNodosPorVisitar } from "../helpers";
import { type Recorrido } from "../interfaces/types";

/*
  Esta funcion contiene el algoritmo BFS
    origen: Nombre del nodo origen
    destino: Nombre del nodo destino
    sentido: Sentido en cual se deben recorrer los nodos conexion
  
  No retorna nada
*/
export const BFS = (origen: string, destino: string, sentido: string) => {
  // Contiene los nodos que ya han sido visitados
  const nodosVisitados = new Set<string>();
  // Contiene los nodos pendientes a visitar
  const nodosPorVisitar: Recorrido[] = [{ nombre: origen, predecesor: "" }];
  // Contiene los nodos recorrdios por el algoritmo
  const arbolVisita = new Map<string, string>();

  // Iteramos hasta que la lista de nodos pendientes por visitar este vacia
  while (nodosPorVisitar.length > 0) {
    // Obtenemos el primer elemento de los nodos pendientes por visitar
    const nodoVisitado = nodosPorVisitar.shift()!;

    // Lo agregamos a la lista de nodos visitados
    nodosVisitados.add(nodoVisitado.nombre);
    // Lo agregamos a Map con el recorrido de los nodos
    arbolVisita.set(nodoVisitado.nombre, nodoVisitado.predecesor);

    /*
      Insertamos al final de la lista los nodos conexion del nodo actual que un no se encuentren en la lista de 
      nodos por visitar
    */
    nodosPorVisitar.push(
      ...obtenerNodosPorVisitar(
        nodoVisitado,
        nodosVisitados,
        nodosPorVisitar,
        sentido
      )
    );
  }

  // Obtenemos del arbol de visita el nodo destino
  let nodoActual = arbolVisita.get(destino);

  // Si el nodo destino no existen en arbolVisita
  if (nodoActual === undefined) {
    // Mostramos el arbol de visita y un mensaje indicando que no existe camino que conecte el nodo origen y destino
    crearTablaSolucionBfsDfs(
      Array.from(arbolVisita.entries()),
      `No existe camino posible entre el nodo ${origen} (origen) y el nodo ${destino} (destino)`
    );

    return;
  }

  // Iniciamos un lista con todos los nodos que pertenecen a la ruta que conecta el nodo origen y destino
  const ruta = [destino];

  while (true) {
    // Salimos del bucle si el nodo actual no tiene predecesor, es decir, se trata del nodo origen
    if (nodoActual === "") break;

    // Agregamos a la ruta actual el nodo actual
    ruta.push(nodoActual);
    // Actualizamos el nodo actual utilizando el nodo predecesor del nodo actual
    nodoActual = arbolVisita.get(nodoActual)!;
  }

  // Mostramos el arbol de visita y un string con la ruta que conecta el nodo origen y el destino
  crearTablaSolucionBfsDfs(
    Array.from(arbolVisita.entries()),
    ruta.reverse().join(" → ")
  );
};
