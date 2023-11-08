import type { NodoBf, NodoRecorrido } from "../interfaces/types";

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

export const creaTablaSolucionMsc = (
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

export const crearTablaSolucionBf = (ruta: string, recorrido: NodoBf[]) => {
  seccion.classList.remove("hide");

  rutaSpan.innerText = ruta;

  let antecesores = "<tr><td>Antecesor</td>";
  let nodos = "<tr><td>Nodo</td>";
  let distancias = "<tr><td>Distancia</td>";
  let costos = "<tr><td>Costo Arco</td>";
  let heuristicas = "<tr><td>Heuristica</td>";

  for (const { antecesor, nodo, coste, costeArco, heuristica } of recorrido) {
    antecesores = antecesores.concat(`<td>${antecesor}</td>`);
    nodos = nodos.concat(`<td>${nodo}</td>`);
    distancias = distancias.concat(`<td>${coste}</td>`);
    costos = costos.concat(`<td>${costeArco}</td>`);
    heuristicas = heuristicas.concat(`<td>${heuristica}</td>`);
  }

  tabla.textContent = "";
  tabla.insertAdjacentHTML(
    "afterbegin",
    antecesores.concat(
      "</tr>",
      nodos,
      "</tr>",
      distancias,
      "</tr>",
      costos,
      "</tr>",
      heuristicas,
      "</tr>"
    )
  );
};
