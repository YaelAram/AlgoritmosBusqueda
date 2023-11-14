import type { NodoBf, NodoRecorrido } from "../interfaces/types";

// Obtenemos la referencia al cuerpo de la tabla donde se insertara la informacion de recorrido
const tabla: HTMLTableSectionElement =
  document.querySelector("#tabla-solucion")!;
// Obtenemos la referencia al elemento SPAN que contendra la ruta calculada
const rutaSpan: HTMLSpanElement = document.querySelector("#ruta")!;
// Obtenemos la referencia al elemento SECTION que contiene el elemento SPAN y TABLE
const seccion: HTMLElement = document.querySelector("#solucion-section")!;

/*
  Esta funcion se encarga de crear la tabla y ruta solucion para los algoritmos BFS y DFS
    arbolVisita: Contiene el recorrido generado por los algoritmos
    ruta: Contiene la ruta generada por los algoritmos

  No retorna nada
*/
export const crearTablaSolucionBfsDfs = (
  arbolVisita: [string, string][],
  ruta: string
) => {
  // Mostramos la ruta calculada
  seccion.classList.remove("hide");

  // Insertamos la ruta dentro del elemento SPAN
  rutaSpan.innerText = ruta;

  // Eliminamos el contenido anterior de la tabla
  tabla.textContent = "";

  // Creamos una variable para contener la informacion de los nodos predecesores
  let predecesores = "<tr><td>Predecesor</td>";
  // Creamos una variable para contener la informacion de los nodos actuales
  let nodos = "<tr><td>Nodo</td>";

  // Recorremos el arbol de visita
  for (const [nodo, predecesor] of arbolVisita) {
    nodos = nodos.concat(`<td>${nodo}</td>`); // Insertamos la nueva celda de la fila de nodos
    predecesores = predecesores.concat(`<td>${predecesor}</td>`); // Insertamos la nueva celda de la fila de predecesores
  }

  // Insertamos el contenido HTML
  tabla.insertAdjacentHTML("afterbegin", `${predecesores}</tr>${nodos}</tr>`);
};

/*
  Esta funcion se encarga de crear la tabla y ruta solucion para el Algoritmo por Maxima Pendiente
    recorrido: Contiene el recorrido generado por el algoritmo
    ruta: Contiene la ruta generada por el algoritmo
    error: Es un mensaje de error opcional

  No retorna nada
*/
export const creaTablaSolucionMsc = (
  recorrido: NodoRecorrido[],
  ruta: string[],
  error: string = ""
) => {
  // Mostramos la ruta calculada
  seccion.classList.remove("hide");

  // Insertamos la ruta dentro del elemento SPAN
  rutaSpan.innerText = !error ? ruta.join(" → ") : error;

  // Eliminamos el contenido anterior de la tabla
  tabla.textContent = "";

  // Creamos una variable para contener la informacion que indica si el nodo fue visitado
  let visitados = "<tr><td>¿Visitado?</td>";
  // Creamos una variable para contener la informacion de los nodos actuales
  let nodos = "<tr><td>Nodo</td>";
  // Creamos una variable para contener la informacion de distancia respecto al nodo destino
  let distancia = "<tr><td>Distancia</td>";

  // Iteramos sobre la variable recorrido
  for (const { nombre, coste } of recorrido) {
    visitados = visitados.concat(
      `<td>${ruta.includes(nombre) ? "Si" : "No"}</td>`
    );
    nodos = nodos.concat(`<td>${nombre}</td>`); // Insertamos la nueva celda de la fila de nodos
    distancia = distancia.concat(`<td>${coste}</td>`); // Insertamos la nueva celda de la fila de distancias
  }

  // Insertamos el contenido HTML
  tabla.insertAdjacentHTML(
    "afterbegin",
    `${visitados}</tr>${nodos}</tr>${distancia}</tr>`
  );
};

/*
  Esta funcion se encarga de crear la tabla y ruta solucion para el Algoritmo Primero el Mejor
    ruta: Contiene la ruta generada por el algoritmo
    recorrido: Contiene el recorrido generado por el algoritmo
    error: Es un mensaje de error opcional

  No retorna nada
*/
export const crearTablaSolucionBf = (
  ruta: string[],
  recorrido: NodoBf[],
  error: string = ""
) => {
  // Mostramos la ruta calculada
  seccion.classList.remove("hide");

  // Insertamos la ruta dentro del elemento SPAN
  rutaSpan.innerText = !error ? ruta.join(" → ") : error;

  // Creamos una variable para contener la informacion que indica si el nodo fue visitado
  let visitados = "<tr><td>¿Visitado?</td>";
  // Creamos una variable para contener la informacion de los nodos antecesores
  let antecesores = "<tr><td>Antecesor</td>";
  // Creamos una variable para contener la informacion de los nodos actuales
  let nodos = "<tr><td>Nodo</td>";
  // Creamos una variable para contener la informacion de la distancia respecto al nodo destino
  let distancias = "<tr><td>Distancia</td>";
  // Creamos una variable para contener la informacion de la distancia entre el nodo actual y el predecesor
  let costos = "<tr><td>Costo Arco</td>";
  // Creamos una variable para contener la informacion de la suma de la distancia y el costo de arco
  let heuristicas = "<tr><td>Heuristica</td>";

  console.log(`a`);
  // Iteramos sobre la variable recorrido
  for (const { antecesor, nodo, coste, costeArco, heuristica } of recorrido) {
    console.log(`${nodo}: ${ruta.includes(nodo)}`);
    visitados = visitados.concat(
      `<td>${ruta.includes(nodo) ? "Si" : "No"}</td>`
    );
    antecesores = antecesores.concat(`<td>${antecesor}</td>`);
    nodos = nodos.concat(`<td>${nodo}</td>`);
    distancias = distancias.concat(`<td>${coste}</td>`);
    costos = costos.concat(`<td>${costeArco}</td>`);
    heuristicas = heuristicas.concat(`<td>${heuristica}</td>`);
  }

  tabla.textContent = ""; // Eliminamos el contenido anterior de la tabla

  // Insertamos el contenido HTML
  tabla.insertAdjacentHTML(
    "afterbegin",
    visitados.concat(
      "</tr>",
      antecesores,
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
