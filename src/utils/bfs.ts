import { grafo } from "../data";
import { crearTablaSolucion } from "../helpers";
import { type Recorrido } from "../interfaces/types";

export const BFS = (origen: string, destino: string) => {
  const nodosVisitados = new Set<string>();
  const nodosPorVisitar: Recorrido[] = [{ nombre: origen, predecesor: "" }];
  const arbolVisita = new Map<string, string>();

  while (nodosPorVisitar.length > 0) {
    const nodoVisitado = nodosPorVisitar.shift()!;

    nodosVisitados.add(nodoVisitado.nombre);
    arbolVisita.set(nodoVisitado.nombre, nodoVisitado.predecesor);

    nodosPorVisitar.push(
      ...grafo[nodoVisitado.nombre].conexiones
        .filter(
          (conexion) =>
            !nodosVisitados.has(conexion.destino) &&
            !nodosPorVisitar.some((nodo) => nodo.nombre === conexion.destino)
        )
        .map((conexion) => ({
          nombre: conexion.destino,
          predecesor: nodoVisitado.nombre,
        }))
    );
  }

  let nodoActual = arbolVisita.get(destino)!;
  let ruta = [destino];

  while (true) {
    if (nodoActual === "") break;

    ruta.push(nodoActual);
    nodoActual = arbolVisita.get(nodoActual)!;
  }

  crearTablaSolucion(
    Array.from(arbolVisita.entries()),
    ruta.reverse().join(" -> ")
  );
};
