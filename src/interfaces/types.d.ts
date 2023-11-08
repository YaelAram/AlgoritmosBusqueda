export interface Grafo {
  [k: string]: Nodo;
}

export interface Nodo {
  conexiones: Conexion[];
}

export interface Conexion {
  destino: string;
  coste: number;
}

export interface Costos {
  [k: string]: Costo;
}

export interface Costo {
  [k: string]: number;
}

export interface Recorrido {
  nombre: string;
  predecesor: string;
}

export interface NodoRecorrido {
  nombre: string;
  coste: number;
}

export interface NodoBf {
  antecesor: string;
  nodo: string;
  coste: number;
  costeArco: number;
  heuristica: number;
}
