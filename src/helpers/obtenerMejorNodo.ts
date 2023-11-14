import { grafo } from "../data";
import { type NodoRecorrido } from "../interfaces/types";
import { obtenerCosto } from "./";

/*
  Esta funcion nos permite obtener el nodo mejor calificado segun el Algoritmo por Maxima Escalada, es decir,
  el nodo cuyo coste total para ir al nodo destino sea el menor de todos y siga siendo menor al coste total para
  ir del nodo antecesor al nodo destino
    nodoActual: Es el nodo que esta siendo visitado
    destino: La clave del nodo destino
    sentido: EL sentido de recorrido de la lista de nodos de conexion de un nodo
    nodosVisitados: Almacena los nodos que ya han sido visitados por el algoritmo

  Retorna un objeto con las siguientes propiedades:
    mejorNodo: El mejor objeto tipo NodoRecorrido de los nodos conexion del nodo actual (menor coste)
    nodos: Contiene la lista de nodos conexion que aun no han sido visitados del nodo actual
*/
export const obtenerMejorNodo = (
  nodoActual: NodoRecorrido,
  destino: string,
  sentido: string,
  nodosVisitados: Set<string>
) => {
  // Obtenemos los nombres de los nodos de conexion del nodo que se esta visitando
  const conexiones = grafo[nodoActual.nombre].conexiones.map(
    (conexion) => conexion.destino
  );

  // La lista de conexiones esta en sentido horario si el sentido a recorrer es antihorario invertimos el orden de la lista
  if (sentido === "anti-horario") conexiones.reverse();

  // Obtenemos los nodos de conexion que no hayan sido visitados aun y los convertimos a un objeto tipo NodoRecorrido
  const nodos = conexiones
    .filter((candidato) => !nodosVisitados.has(candidato))
    .map((nodo) => ({ nombre: nodo, coste: obtenerCosto(nodo, destino) }));

  // Obtenemos el nodo cuyo coste para ir al nodo destino sea el menor
  const mejorNodo = [...nodos]
    .filter((candidato) => candidato.coste < nodoActual.coste)
    .sort((candidato1, candidato2) => candidato1.coste - candidato2.coste)
    .shift()!;

  // Retornamos los dos objetos calculados
  return {
    mejorNodo,
    nodos,
  };
};
