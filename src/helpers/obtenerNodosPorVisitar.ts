import { grafo } from "../data";
import { type Recorrido } from "../interfaces/types";

export const obtenerNodosPorVisitar = (
  nodoVisitado: Recorrido,
  nodosVisitados: Set<string>,
  nodosPorVisitar: Recorrido[],
  sentido: string
) => {
  const nodos = grafo[nodoVisitado.nombre].conexiones
    .filter(
      (conexion) =>
        !nodosVisitados.has(conexion.destino) &&
        !nodosPorVisitar.some((nodo) => nodo.nombre === conexion.destino)
    )
    .map((conexion) => ({
      nombre: conexion.destino,
      predecesor: nodoVisitado.nombre,
    }));

  if (sentido === "anti-horario") return nodos.reverse();
  else return nodos;
};
