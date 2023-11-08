import { costos } from "../data";

const titulos: HTMLTableRowElement = document.querySelector("#titulo-tabla")!;
const cuerpoTabla: HTMLTableSectionElement =
  document.querySelector("#tabla-costos")!;

const crearTitulos = () => {
  const titulosTabla = Object.keys(costos)
    .map((titulo, index) => `<th title="Columna ${index + 1}">${titulo}</th>`)
    .join("");

  titulos.insertAdjacentHTML("afterbegin", `<th>--</th>${titulosTabla}`);
};

const crearCuerpoTabla = () => {
  const tabla = Array.from(
    { length: Object.keys(costos).length },
    (_, index) =>
      `<tr><td class="title" title="Fila ${index + 1}">${index + 1}</td>`
  );

  for (let claveOrigen in costos) {
    const costo = costos[claveOrigen];

    tabla[Number(claveOrigen) - 1] += `<td title="Mismo Nodo">0</td>`;
    for (let claveDestino in costo) {
      const costoLbl =
        costo[claveDestino] === Infinity ? "∞" : costo[claveDestino];
      tabla[
        Number(claveDestino) - 1
      ] += `<td title="De: ${claveOrigen}  A: ${claveDestino}">${costoLbl}</td>`;
    }
  }

  const html = tabla.map((fila) => `${fila}</tr>`).join("");
  cuerpoTabla.insertAdjacentHTML("afterbegin", html);
};

export const crearTablaCostes = () => {
  crearTitulos();
  crearCuerpoTabla();
};
