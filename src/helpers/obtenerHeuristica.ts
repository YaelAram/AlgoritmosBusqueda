import { costos, grafo } from "../data";

export const obtenerCosto = (origen: string, destino: string): number => {
  if (origen === destino) return 0;
  else return costos[origen][destino] ?? costos[destino][origen];
};

export const obtenerCostoArco = (origen: string, destino: string): number => {
  if (origen === destino) return 0;

  return (
    grafo[origen].conexiones.find((nodo) => nodo.destino === destino)?.coste ??
    Infinity
  );
};

export const obtenerHeuristica = (
  origen: string,
  destino: string,
  destinoFinal: string
) => {
  const coste = obtenerCosto(destino, destinoFinal);
  const costeArco = obtenerCostoArco(origen, destino);

  return {
    antecesor: origen,
    nodo: destino,
    coste,
    costeArco,
    heuristica: coste + costeArco,
  };
};
