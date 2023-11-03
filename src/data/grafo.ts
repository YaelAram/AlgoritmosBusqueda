import { type Grafo } from "../interfaces/types";

export const grafo: Grafo = {
  "1": {
    nombre: "1",
    visitado: false,
    conexiones: [
      { destino: "4", coste: 701 },
      { destino: "6", coste: 117 },
      { destino: "13", coste: 699 },
    ],
    orden: ["6", "13", "4"],
  },
  "2": {
    nombre: "2",
    visitado: false,
    conexiones: [
      { destino: "9", coste: 245 },
      { destino: "12", coste: 137 },
      { destino: "22", coste: 171 },
      { destino: "28", coste: 131 },
    ],
    orden: ["22", "12", "9", "12"],
  },
  "3": {
    nombre: "3",
    visitado: false,
    conexiones: [
      { destino: "14", coste: 317 },
      { destino: "18", coste: 291 },
      { destino: "19", coste: 638 },
      { destino: "23", coste: 235 },
    ],
    orden: ["14", "23", "19", "18"],
  },
  "4": {
    nombre: "4",
    visitado: false,
    conexiones: [
      { destino: "1", coste: 701 },
      { destino: "9", coste: 202 },
      { destino: "13", coste: 98 },
    ],
    orden: ["9", "1", "13"],
  },
  "5": {
    nombre: "5",
    visitado: false,
    conexiones: [
      { destino: "11", coste: 705 },
      { destino: "15", coste: 220 },
    ],
    orden: ["15", "11"],
  },
  "6": {
    nombre: "6",
    visitado: false,
    conexiones: [
      { destino: "1", coste: 117 },
      { destino: "16", coste: 288 },
    ],
    orden: ["16", "1"],
  },
  "7": {
    nombre: "7",
    visitado: false,
    conexiones: [
      { destino: "8", coste: 662 },
      { destino: "11", coste: 696 },
      { destino: "27", coste: 475 },
    ],
    orden: ["27", "8", "11"],
  },
  "8": {
    nombre: "8",
    visitado: false,
    conexiones: [
      { destino: "7", coste: 662 },
      { destino: "15", coste: 309 },
      { destino: "27", coste: 268 },
      { destino: "28", coste: 310 },
    ],
    orden: ["27", "28", "15", "7"],
  },
  "9": {
    nombre: "9",
    visitado: false,
    conexiones: [
      { destino: "2", coste: 245 },
      { destino: "4", coste: 202 },
      { destino: "17", coste: 321 },
      { destino: "24", coste: 214 },
      { destino: "28", coste: 320 },
    ],
    orden: ["28", "2", "17", "4", "24"],
  },
  "10": {
    nombre: "10",
    visitado: false,
    conexiones: [
      { destino: "12", coste: 54 },
      { destino: "16", coste: 381 },
    ],
    orden: ["16", "12"],
  },
  "11": {
    nombre: "11",
    visitado: false,
    conexiones: [
      { destino: "5", coste: 705 },
      { destino: "7", coste: 696 },
    ],
    orden: ["7", "5"],
  },
  "12": {
    nombre: "12",
    visitado: false,
    conexiones: [
      { destino: "2", coste: 137 },
      { destino: "10", coste: 54 },
    ],
    orden: ["10", "2"],
  },
  "13": {
    nombre: "13",
    visitado: false,
    conexiones: [
      { destino: "1", coste: 699 },
      { destino: "4", coste: 98 },
      { destino: "24", coste: 446 },
    ],
    orden: ["4", "1", "24"],
  },
  "14": {
    nombre: "14",
    visitado: false,
    conexiones: [
      { destino: "3", coste: 317 },
      { destino: "18", coste: 328 },
      { destino: "23", coste: 499 },
    ],
    orden: ["23", "3", "18"],
  },
  "15": {
    nombre: "15",
    visitado: false,
    conexiones: [
      { destino: "5", coste: 220 },
      { destino: "8", coste: 309 },
      { destino: "24", coste: 286 },
    ],
    orden: ["8", "24", "5"],
  },
  "16": {
    nombre: "16",
    visitado: false,
    conexiones: [
      { destino: "6", coste: 288 },
      { destino: "10", coste: 381 },
      { destino: "19", coste: 95 },
      { destino: "20", coste: 123 },
      { destino: "25", coste: 118 },
      { destino: "26", coste: 66 },
    ],
    orden: ["19", "25", "20", "6", "26", "10"],
  },
  "17": {
    nombre: "17",
    visitado: false,
    conexiones: [
      { destino: "9", coste: 321 },
      { destino: "26", coste: 259 },
    ],
    orden: ["26", "9"],
  },
  "18": {
    nombre: "18",
    visitado: false,
    conexiones: [
      { destino: "3", coste: 291 },
      { destino: "14", coste: 328 },
      { destino: "21", coste: 89 },
    ],
    orden: ["14", "3", "21"],
  },
  "19": {
    nombre: "19",
    visitado: false,
    conexiones: [
      { destino: "3", coste: 638 },
      { destino: "16", coste: 95 },
      { destino: "23", coste: 391 },
    ],
    orden: ["23", "16", "3"],
  },
  "20": {
    nombre: "20",
    visitado: false,
    conexiones: [
      { destino: "16", coste: 123 },
      { destino: "25", coste: 33 },
    ],
    orden: ["25", "16"],
  },
  "21": {
    nombre: "21",
    visitado: false,
    conexiones: [
      { destino: "18", coste: 89 },
      { destino: "22", coste: 449 },
      { destino: "27", coste: 262 },
      { destino: "28", coste: 380 },
    ],
    orden: ["18", "22", "28", "27"],
  },
  "22": {
    nombre: "22",
    visitado: false,
    conexiones: [
      { destino: "2", coste: 171 },
      { destino: "21", coste: 449 },
      { destino: "23", coste: 401 },
      { destino: "28", coste: 190 },
    ],
    orden: ["23", "2", "28", "21"],
  },
  "23": {
    nombre: "23",
    visitado: false,
    conexiones: [
      { destino: "3", coste: 235 },
      { destino: "14", coste: 499 },
      { destino: "19", coste: 391 },
      { destino: "22", coste: 401 },
    ],
    orden: ["14", "19", "22", "3"],
  },
  "24": {
    nombre: "24",
    visitado: false,
    conexiones: [
      { destino: "9", coste: 214 },
      { destino: "13", coste: 446 },
      { destino: "15", coste: 286 },
    ],
    orden: ["9", "13", "15"],
  },
  "25": {
    nombre: "25",
    visitado: false,
    conexiones: [
      { destino: "16", coste: 118 },
      { destino: "20", coste: 33 },
    ],
    orden: ["20", "16"],
  },
  "26": {
    nombre: "26",
    visitado: false,
    conexiones: [
      { destino: "16", coste: 66 },
      { destino: "17", coste: 259 },
    ],
    orden: ["16", "17"],
  },
  "27": {
    nombre: "27",
    visitado: false,
    conexiones: [
      { destino: "7", coste: 475 },
      { destino: "8", coste: 268 },
      { destino: "21", coste: 262 },
      { destino: "28", coste: 390 },
    ],
    orden: ["21", "28", "8", "7"],
  },
  "28": {
    nombre: "28",
    visitado: false,
    conexiones: [
      { destino: "2", coste: 131 },
      { destino: "8", coste: 310 },
      { destino: "9", coste: 320 },
      { destino: "21", coste: 380 },
      { destino: "22", coste: 190 },
      { destino: "27", coste: 390 },
    ],
    orden: ["27", "21", "22", "2", "9", "8"],
  },
};
