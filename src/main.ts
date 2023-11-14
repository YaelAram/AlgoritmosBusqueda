import { crearTablaCostes, handleSubmit } from "./helpers";
// Importamos el archivo CSS para agregar los estilos al HTML
import "./style.css";

/*
  Tecnologias utilizadas:
    * Vite 4.4.5
    * TypeScript 5.0.2
    * Yarn 1.22.19
    * NodeJS 20.9.0
    * NPM 10.2.3
*/

// Ejecutamos la funcion que crea la tabla de costes entre los nodos del grafo
crearTablaCostes();

/*
  Agregamos el evento submit al formulario, el evento submit ocurre cuando el usuario da click sobre el boton del
  forumario o cuando oprime la tecla ENTER dentro de un campo de texto
*/
document.querySelector("form")!.addEventListener("submit", handleSubmit);
