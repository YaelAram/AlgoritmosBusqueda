import { costos, grafo } from "../data";

/*
  Esta funcion nos permite obtener el costo total para ir desde un node origen hasta un nodo destino
    origen: Nombre del nodo origen
    destino: Nombre del nodo destino

  Retorna el costo total para ir del nodo origen al nodo destino
*/
export const obtenerCosto = (origen: string, destino: string): number => {
  if (origen === destino)
    return 0; // Retornamos un costo cero si el nodo origen y destino son el mismo nodo
  // Retornamos el costo que obtenemos del objeto de costos
  else return costos[origen][destino] ?? costos[destino][origen];
};

/*
  Esta funcion nos permite obtener el costo para ir de un nodo origen a uno de los nodos de conexion
    origen: Nombre del nodo origen
    destino: Nombre del nodo de conexion destino

  Retorna el costo para ir del nodo origen al nodo de conexion destino
*/
export const obtenerCostoArco = (origen: string, destino: string): number => {
  if (origen === destino) return 0; // Retornamos un costo cero si el nodo origen y destino son el mismo nodo

  // Retornamos el costo del nodo origen al nodo de conexion destino, si no existe retornamos un valor infinito
  return (
    grafo[origen].conexiones.find((nodo) => nodo.destino === destino)?.coste ??
    Infinity
  );
};

/*
  Esta funcion nos permite obtener el objeto tipo NodoBf a partir de un nodo origen, un nodo destino y el nodo destino
  indicado por el usuario
    origen: Nombre del nodo origen
    destino: Nombre del nodo de conexion destino
    destinoFinal: Nombre del nodo destino indicado por el usuario

  Retorna un objeto tipo NodoBf
*/
export const obtenerHeuristica = (
  origen: string,
  destino: string,
  destinoFinal: string
) => {
  // Obtiene el costo para ir del nodo de conexion destino al nodo destino indicado por el usuario
  const coste = obtenerCosto(destino, destinoFinal);
  // Obtiene el costo de arco para ir del nodo origen al nodo de conexion destino
  const costeArco = obtenerCostoArco(origen, destino);

  // Construimos el objeto tipo NodoBf
  return {
    antecesor: origen, // Indicamos el nodo antecesor
    nodo: destino, // Indicamos el nombre del nodo actual
    coste,
    costeArco,
    heuristica: coste + costeArco, // Obtenemos el valor de heuristica
  };
};
