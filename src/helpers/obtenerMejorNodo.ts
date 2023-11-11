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

  Retorna el mejor objeto tipo NodoRecorrido de los nodos conexion del nodo actual
*/
export const obtenerMejorNodo = (
  nodoActual: NodoRecorrido,
  destino: string,
  sentido: string
) => {
  // Obtenemos los nombres de los nodos de conexion del nodo que se esta visitando
  const conexiones = grafo[nodoActual.nombre].conexiones.map(
    (conexion) => conexion.destino
  );

  // La lista de conexiones esta en sentido horario si el sentido a recorrer es antihorario invertimos el orden de la lista
  if (sentido === "anti-horario") conexiones.reverse();

  /* 
    Retornamos el resultado de convertir la lista de nombres de los nodos de conexion a una lista de objetos tipo 
    NodoRecorrido, filtramos aquellos cuyo coste sea menor al coste del nodo actual, ordenamos de menor a mayor los
    elementos y obtenemos el primer elemento de la lista (el menor de todos)
  */
  return conexiones
    .map((nodo) => ({ nombre: nodo, coste: obtenerCosto(nodo, destino) }))
    .filter((candidato) => candidato.coste < nodoActual.coste)
    .sort((candidato1, candidato2) => candidato1.coste - candidato2.coste)
    .shift()!;
};
