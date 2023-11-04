const tabla: HTMLTableSectionElement =
  document.querySelector("#tabla-solucion")!;
const rutaSpan: HTMLSpanElement = document.querySelector("#ruta")!;
const seccion: HTMLElement = document.querySelector("#solucion-section")!;

export const crearTablaSolucion = (
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

  tabla.insertAdjacentHTML("afterbegin", predecesores.concat("</tr>"));
  tabla.insertAdjacentHTML("beforeend", nodos.concat("</tr>"));
};
