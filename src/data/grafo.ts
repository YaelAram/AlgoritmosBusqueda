import { type Grafo } from "../interfaces/types";

/* La constante grafo contiene la lista de adyacencia del grafo, donde cada elemento del atributo 'conexiones'
esta ordenado en sentido horario e indica el costo de arco para ir del nodo destino al nodo de conexion */
export const grafo: Grafo = {
  "1": {
    // Nombre del nodo actual
    conexiones: [
      { destino: "6", coste: 117 }, // Nombre del nodo destino y el costo de ir del nodo actual al nodo destino
      { destino: "13", coste: 699 },
      { destino: "4", coste: 701 },
    ],
  },
  "2": {
    conexiones: [
      { destino: "22", coste: 171 },
      { destino: "12", coste: 137 },
      { destino: "9", coste: 245 },
    ],
  },
  "3": {
    conexiones: [
      { destino: "14", coste: 317 },
      { destino: "23", coste: 235 },
      { destino: "19", coste: 638 },
      { destino: "18", coste: 291 },
    ],
  },
  "4": {
    conexiones: [
      { destino: "9", coste: 202 },
      { destino: "1", coste: 701 },
      { destino: "13", coste: 98 },
    ],
  },
  "5": {
    conexiones: [
      { destino: "15", coste: 220 },
      { destino: "11", coste: 705 },
    ],
  },
  "6": {
    conexiones: [
      { destino: "16", coste: 288 },
      { destino: "1", coste: 117 },
    ],
  },
  "7": {
    conexiones: [
      { destino: "27", coste: 475 },
      { destino: "8", coste: 662 },
      { destino: "11", coste: 696 },
    ],
  },
  "8": {
    conexiones: [
      { destino: "27", coste: 268 },
      { destino: "15", coste: 309 },
      { destino: "7", coste: 662 },
    ],
  },
  "9": {
    conexiones: [
      { destino: "28", coste: 320 },
      { destino: "2", coste: 245 },
      { destino: "17", coste: 321 },
      { destino: "4", coste: 202 },
      { destino: "24", coste: 214 },
    ],
  },
  "10": {
    conexiones: [
      { destino: "16", coste: 381 },
      { destino: "12", coste: 54 },
    ],
  },
  "11": {
    conexiones: [
      { destino: "7", coste: 696 },
      { destino: "5", coste: 705 },
    ],
  },
  "12": {
    conexiones: [
      { destino: "10", coste: 54 },
      { destino: "2", coste: 137 },
    ],
  },
  "13": {
    conexiones: [
      { destino: "4", coste: 98 },
      { destino: "1", coste: 699 },
      { destino: "24", coste: 446 },
    ],
  },
  "14": {
    conexiones: [
      { destino: "23", coste: 499 },
      { destino: "3", coste: 317 },
    ],
  },
  "15": {
    conexiones: [
      { destino: "8", coste: 309 },
      { destino: "24", coste: 286 },
      { destino: "5", coste: 220 },
    ],
  },
  "16": {
    conexiones: [
      { destino: "19", coste: 95 },
      { destino: "25", coste: 118 },
      { destino: "20", coste: 123 },
      { destino: "6", coste: 288 },
      { destino: "26", coste: 66 },
      { destino: "10", coste: 381 },
    ],
  },
  "17": {
    conexiones: [
      { destino: "26", coste: 259 },
      { destino: "9", coste: 321 },
    ],
  },
  "18": {
    conexiones: [
      { destino: "14", coste: 328 },
      { destino: "3", coste: 291 },
      { destino: "21", coste: 89 },
    ],
  },
  "19": {
    conexiones: [
      { destino: "23", coste: 391 },
      { destino: "16", coste: 95 },
      { destino: "3", coste: 638 },
    ],
  },
  "20": {
    conexiones: [
      { destino: "25", coste: 33 },
      { destino: "16", coste: 123 },
    ],
  },
  "21": {
    conexiones: [
      { destino: "18", coste: 89 },
      { destino: "22", coste: 449 },
      { destino: "28", coste: 380 },
      { destino: "27", coste: 262 },
    ],
  },
  "22": {
    conexiones: [
      { destino: "23", coste: 401 },
      { destino: "2", coste: 171 },
      { destino: "28", coste: 190 },
      { destino: "21", coste: 449 },
    ],
  },
  "23": {
    conexiones: [
      { destino: "14", coste: 499 },
      { destino: "19", coste: 391 },
      { destino: "22", coste: 401 },
      { destino: "3", coste: 235 },
    ],
  },
  "24": {
    conexiones: [
      { destino: "9", coste: 214 },
      { destino: "13", coste: 446 },
      { destino: "15", coste: 286 },
    ],
  },
  "25": {
    conexiones: [],
  },
  "26": {
    conexiones: [
      { destino: "16", coste: 66 },
      { destino: "17", coste: 259 },
    ],
  },
  "27": {
    conexiones: [
      { destino: "21", coste: 262 },
      { destino: "28", coste: 390 },
      { destino: "8", coste: 268 },
      { destino: "7", coste: 475 },
    ],
  },
  "28": {
    conexiones: [
      { destino: "27", coste: 390 },
      { destino: "21", coste: 380 },
      { destino: "22", coste: 190 },
      { destino: "2", coste: 131 },
      { destino: "9", coste: 320 },
      { destino: "8", coste: 310 },
    ],
  },
};
