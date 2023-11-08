import { grafo } from "../data";
import { crearTablaSolucionBf, obtenerCosto } from "../helpers";
import { obtenerHeuristica } from "../helpers/obtenerHeuristica";

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

export const BF = (origen: string, destino: string, sentido: string) => {
  const nodoInicial = crearNodoInicial(origen, destino);
  const nodosPorVisitar = [nodoInicial];
  const nodosVisitados = new Set<string>();
  const recorrido = [nodoInicial];

  while (nodosPorVisitar.length > 0) {
    const nodoActual = nodosPorVisitar.shift()!;

    nodosVisitados.add(nodoActual.nodo);

    const nodos = grafo[nodoActual.nodo].conexiones
      .filter((nodo) => !nodosVisitados.has(nodo.destino))
      .map((nodo) => {
        nodosVisitados.add(nodo.destino);
        return obtenerHeuristica(nodoActual.nodo, nodo.destino, destino);
      });

    if (sentido === "anti-horario") nodos.reverse();

    recorrido.push(...nodos);

    if (nodos.length === 0) break;

    const mejorNodo = nodos
      .filter((nodo) => nodo.heuristica <= nodoActual.heuristica)
      .sort((nodo1, nodo2) => nodo1.heuristica - nodo2.heuristica)
      .shift()!;

    console.log(nodos);
    nodosPorVisitar.push(mejorNodo);
  }

  let nodoRuta = recorrido.find((nodo) => nodo.nodo === destino);

  if (nodoRuta === undefined) {
    crearTablaSolucionBf(
      `No existe camino posible entre el nodo ${origen} (origen) y el nodo ${destino} (destino)`,
      recorrido
    );
    return;
  }

  const ruta = [];

  while (true) {
    if (nodoRuta === undefined) break;

    ruta.unshift(nodoRuta.nodo);
    nodoRuta = recorrido.find((nodo) => nodo.nodo === nodoRuta?.antecesor);
  }

  crearTablaSolucionBf(ruta.join(" → "), recorrido);
};
