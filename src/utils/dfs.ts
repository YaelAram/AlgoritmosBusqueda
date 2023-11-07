import { crearTablaSolucionBfsDfs, obtenerNodosPorVisitar } from "../helpers";
import { type Recorrido } from "../interfaces/types";

export const DFS = (origen: string, destino: string, sentido: string) => {
  const nodosVisitados = new Set<string>();
  const nodosPorVisitar: Recorrido[] = [{ nombre: origen, predecesor: "" }];
  const arbolVisita = new Map<string, string>();

  while (nodosPorVisitar.length > 0) {
    const nodoVisitado = nodosPorVisitar.pop()!;

    nodosVisitados.add(nodoVisitado.nombre);
    arbolVisita.set(nodoVisitado.nombre, nodoVisitado.predecesor);

    nodosPorVisitar.push(
      ...obtenerNodosPorVisitar(
        nodoVisitado,
        nodosVisitados,
        nodosPorVisitar,
        sentido
      ).reverse()
    );
  }

  let nodoActual = arbolVisita.get(destino);

  if (nodoActual === undefined) {
    crearTablaSolucionBfsDfs(
      Array.from(arbolVisita.entries()),
      `No existe camino posible entre el nodo ${origen} (origen) y el nodo ${destino} (destino)`
    );

    return;
  }

  let ruta = [destino];

  while (true) {
    if (nodoActual === "") break;

    ruta.push(nodoActual);
    nodoActual = arbolVisita.get(nodoActual)!;
  }

  crearTablaSolucionBfsDfs(
    Array.from(arbolVisita.entries()),
    ruta.reverse().join(" → ")
  );
};
