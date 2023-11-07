import { costos } from "../data";

export const obtenerCosto = (origen: string, destino: string): number => {
  if (origen === destino) return 0;
  else return costos[origen][destino] ?? costos[destino][origen];
};
