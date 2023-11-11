import { costos } from "../data";

// La variable titulos contiene la referencia al elemento TR que contendra los titulos de columna de la tabla
const titulos: HTMLTableRowElement = document.querySelector("#titulo-tabla")!;
// La variable cuerpoTabla contiene la referencia al cuerpo de la tabla de los costos de viaje entre los nodos del grafo
const cuerpoTabla: HTMLTableSectionElement =
  document.querySelector("#tabla-costos")!;

/*
  Esta funcion crea los titulos de columna de la tabla de costos entre los nodos del grafo

  No retorna nada
*/
const crearTitulos = () => {
  // Obtenemos la lista con todos los nodos que existen en el grafo
  const titulosTabla = Object.keys(costos)
    // Transformando cada nombre de nodo en un elemento TH (titulo de columna)
    .map((titulo, index) => `<th title="Columna ${index + 1}">${titulo}</th>`)
    // Unimos todos los elementos de la lista en un solo string
    .join("");

  // Insertamos el string con el HTML dentro del elemento TR
  titulos.insertAdjacentHTML("afterbegin", `<th>--</th>${titulosTabla}`);
};

/*
  Esta funcion se encarga de crear el HTML que muestre la tabla de costos

  No retorna nada
*/
const crearCuerpoTabla = () => {
  // Creamos las N filas de la tabla de costos
  const tabla = Array.from(
    { length: Object.keys(costos).length },
    (_, index) =>
      `<tr><td class="title" title="Fila ${index + 1}">${index + 1}</td>`
  );

  // Recorremos la variable que contiene los costos entre los nodos del grafo
  for (let claveOrigen in costos) {
    const costo = costos[claveOrigen]; // Obtenemos los costos del nodo actual

    // Agregamos la celda que indica costo cero para los casos donde el nodo origen y el nodo destino sean el mismo
    tabla[Number(claveOrigen) - 1] += `<td title="Mismo Nodo">0</td>`;
    for (let claveDestino in costo) {
      // Obtenemos el costo para ir desde el nodo actual al nodo destino actual
      const costoLbl =
        costo[claveDestino] === Infinity ? "∞" : costo[claveDestino];
      // Agregamos el elemento TD con la informacion de costo
      tabla[
        Number(claveDestino) - 1
      ] += `<td title="De: ${claveOrigen}  A: ${claveDestino}">${costoLbl}</td>`;
    }
  }

  // Unimos los strings de fila de tabla en un solo string
  const html = tabla.map((fila) => `${fila}</tr>`).join("");
  // Insertamos el string con el HTML dentor del cuerpo de la tabla
  cuerpoTabla.insertAdjacentHTML("afterbegin", html);
};

/*
  Esta funcion se encarga unicamente de mandar a llamar las dos funciones anteriores

  No retorna nada
*/
export const crearTablaCostes = () => {
  crearTitulos();
  crearCuerpoTabla();
};
