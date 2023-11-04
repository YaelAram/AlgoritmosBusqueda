export interface Grafo {
  [k: string]: Nodo;
}

export interface Nodo {
  conexiones: Conexion[];
  orden: string[];
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
