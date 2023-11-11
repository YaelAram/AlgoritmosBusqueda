import { grafo } from "../data";
import { type Recorrido } from "../interfaces/types";

/*
  La siguiente funcion permite obtener los nodos que aun no estan en lista de nodos pendientes por visitar
    nodoVisitado: Contiene la informacion del nodo que actualmente se esta visitando
    nodosVisitados: Contiene la estructura SET con todos los nodos que ya fueron visitados
    nodosPorVisitar: Es la lista con todos los nodos pendientes a visitar
    sentido: El sentido en el que deben ser visitados los nodos de conexion

  Retorna la lista con los nodos a agregar a la lista de nodos pendientes por visitar
*/
export const obtenerNodosPorVisitar = (
  nodoVisitado: Recorrido,
  nodosVisitados: Set<string>,
  nodosPorVisitar: Recorrido[],
  sentido: string
) => {
  /*
    La variable nodos contiene la lista de nodos a retornar

    Como primer paso obtenermos del grafo el nodo que actualmente estamos visitando y de este la lista de conexiones
  */
  const nodos = grafo[nodoVisitado.nombre].conexiones
    .filter(
      // Obtenemos los nodos que aun no han sido vistados y no se encuentran en la lista de nodos por visitar
      (conexion) =>
        !nodosVisitados.has(conexion.destino) &&
        !nodosPorVisitar.some((nodo) => nodo.nombre === conexion.destino)
    )
    .map((conexion) => ({
      // Creamos objetos de tipo Recorrido con la informacion del nodo actual y del predecesor
      nombre: conexion.destino,
      predecesor: nodoVisitado.nombre,
    }));

  // Si el sentido de recorrido es anti horario entonces retornamos la lista en sentido inverso
  if (sentido === "anti-horario") return nodos.reverse();
  // Si el sentido de recorrido es horario pordemos retornar la variable nodos sin ninguna modificacion adicional
  else return nodos;
};
