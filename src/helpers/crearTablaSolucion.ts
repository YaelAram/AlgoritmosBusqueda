import { type NodoRecorrido } from "../interfaces/types";

const tabla: HTMLTableSectionElement =
  document.querySelector("#tabla-solucion")!;
const rutaSpan: HTMLSpanElement = document.querySelector("#ruta")!;
const seccion: HTMLElement = document.querySelector("#solucion-section")!;

export const crearTablaSolucionBfsDfs = (
  arbolVisita: [string, string][],
  ruta: string
) => {
  seccion.classList.remove("hide");

  rutaSpan.innerText = ruta;

  tabla.textContent = "";

  let predecesores = "<tr><td>Predecesor</td>";
  let nodos = "<tr><td>Nodo</td>";

  for (const [nodo, predecesor] of arbolVisita) {
    nodos = nodos.concat(`<td>${nodo}</td>`);
    predecesores = predecesores.concat(`<td>${predecesor}</td>`);
  }

  tabla.insertAdjacentHTML(
    "afterbegin",
    predecesores.concat("</tr>", nodos, "</tr>")
  );
};

export const creaTablaSolucionMscBf = (
  recorrido: NodoRecorrido[],
  ruta: string
) => {
  seccion.classList.remove("hide");

  rutaSpan.innerText = ruta;

  tabla.textContent = "";

  let nodos = "<tr><td>Nodo</td>";
  let distancia = "<tr><td>Distancia</td>";

  for (const { nombre, coste } of recorrido) {
    nodos = nodos.concat(`<td>${nombre}</td>`);
    distancia = distancia.concat(`<td>${coste}</td>`);
  }

  tabla.insertAdjacentHTML(
    "afterbegin",
    nodos.concat("</tr>", distancia, "</tr>")
  );
};
