// Esta interfaz define el tipo de nuestro grafo, similar a un Map<string, string>
export interface Grafo {
  [k: string]: Nodo;
}

// Esta interfaz define como lucen los nodos que conforman el grafo
export interface Nodo {
  conexiones: Conexion[];
}

// Esta interfaz define como lucen las conexiones de un nodo
export interface Conexion {
  destino: string; // Contiene el nodo destino
  coste: number; // Contiene el costo de ir al nodo destino
}

// Esta interfaz define como luce el objeto que contiene los costos de recorrido entre todos los nodos del grafo
export interface Costos {
  [k: string]: Costo; // La clave K indica el nodo origen
}

// Define los costos de ir del nodo origen a la lista de nodos destino (con los que tiene algun camino)
export interface Costo {
  [k: string]: number; // La clave K indica el nodo destino y su valor es el costo total
}

// Indica el recorrido de nodos en los algoritmos BFS y DFS
export interface Recorrido {
  nombre: string; // Clave del nodo actual
  predecesor: string; // Clave del nodo predecesor
}

// Indica el recorrido de nodos en el Algoritmo de Maxima Pendiente
export interface NodoRecorrido {
  nombre: string; // Nombre del nodo actual
  coste: number; // Costo restante para ir al nodo destino
}

// Indica el recorrido de nodos en el Algoritmo Primero el Mejor
export interface NodoBf {
  antecesor: string; // Nombre del nodo predecesor
  nodo: string; // Nombre del nodo actual
  coste: number; // Coste total entre el nodo actual y el nodo destino
  costeArco: number; // Coste de arco entre el nodo actual y el nodo predecesor
  heuristica: number; // Resultado de la suma entre el atributo 'coste' y el atributo 'costeArco'
}
