import { grafo } from "../data";
import { crearTablaSolucionBf, obtenerCosto } from "../helpers";
import { obtenerHeuristica } from "../helpers/obtenerHeuristica";

/*
  Esta funcion crea el nodo incial a partir del nodo origen y el nodo destino
    origen: Nombre del nodo origen
    destino: Nombre del nodo destino

  Retorna un objeto de tipo NodoBf
*/
const crearNodoInicial = (origen: string, destino: string) => {
  const coste = obtenerCosto(origen, destino);

  return {
    antecesor: "",
    nodo: origen,
    coste,
    costeArco: 0,
    heuristica: coste,
  };
};

/*
  Esta funcion contiene el Algoritmo de Primero el Mejor
    origen: Nombre del nodo origen
    destino: Nombre del nodo destino
    sentido: Sentido en cual se deben recorrer los nodos conexion
  
  No retorna nada
*/
export const BF = (origen: string, destino: string, sentido: string) => {
  // Contiene el nodo que da inicio al algoritmo
  const nodoInicial = crearNodoInicial(origen, destino);
  // Contiene los nodos pendientes a visitar
  const nodosPorVisitar = [nodoInicial];
  // Contiene los nodos que ya han sido visitados
  const nodosVisitados = new Set<string>();
  // Contiene los nodos recorrdios por el algoritmo
  const recorrido = [nodoInicial];

  // Iteramos mientras la lista de nodos por visitar aun contenga elementos
  while (nodosPorVisitar.length > 0) {
    // Obtenemos el primer elemento de los nodos pendientes por visitar
    const nodoActual = nodosPorVisitar.shift()!;

    // Lo agregamos a la lista de nodos visitados
    nodosVisitados.add(nodoActual.nodo);

    /*
      Obtenemos la lista de nodos que aun no estan en la lista de nodo pendientes a visitar y los convierte
      en objetos de tipo NodoBf
    */
    const nodos = grafo[nodoActual.nodo].conexiones
      .filter((nodo) => !nodosVisitados.has(nodo.destino))
      .map((nodo) => {
        nodosVisitados.add(nodo.destino); // Agregamos el nodo a la lista de nodos visitados
        return obtenerHeuristica(nodoActual.nodo, nodo.destino, destino); // Convertimos a objeto tipo NodoBf
      });

    // Invertimos el orden de los nodos por visitar si el sentido es antihorario
    if (sentido === "anti-horario") nodos.reverse();

    // Agregamos los nodos al recorrido
    recorrido.push(...nodos);

    // Si no hay nodos con mejor heuristica que el nodo actual salimos del bucle
    if (nodos.length === 0) break;

    // Obtenemos el nodo con mejor o igual heuristica que el nodo actual
    const mejorNodo = nodos
      .filter((nodo) => nodo.heuristica <= nodoActual.heuristica) // Filtramos los de menor o igual heuristica
      .sort((nodo1, nodo2) => nodo1.heuristica - nodo2.heuristica) // Ordenamos de menor a mayor
      .shift()!; // Obtenemos el primer elemento de la lista

    // Agregamos el mejor nodo a la lista de nodos por visitar
    nodosPorVisitar.push(mejorNodo);
  }

  // Obtenemos del recorrido el nodo destino
  let nodoRuta = recorrido.find((nodo) => nodo.nodo === destino);

  // Si el nodo destino no existen en el recorrido
  if (nodoRuta === undefined) {
    // Mostramos el recorrido y un mensaje indicando que no existe camino que conecte el nodo origen y destino
    crearTablaSolucionBf(
      [],
      recorrido,
      `No existe camino posible entre el nodo ${origen} (origen) y el nodo ${destino} (destino)`
    );
    return;
  }

  // Iniciamos un lista con todos los nodos que pertenecen a la ruta que conecta el nodo origen y destino
  const ruta = [];

  while (true) {
    // Salimos del bucle si el nodo actual no tiene predecesor, es decir, se trata del nodo origen
    if (nodoRuta === undefined) break;

    // Agregamos al inicio a la ruta el nodo actual
    ruta.unshift(nodoRuta.nodo);
    // Actualizamos el nodo actual utilizando el nodo predecesor del nodo actual
    nodoRuta = recorrido.find((nodo) => nodo.nodo === nodoRuta?.antecesor);
  }

  // Mostramos el recorrido y un string con la ruta que conecta el nodo origen y el destino
  crearTablaSolucionBf(ruta, recorrido);
};
