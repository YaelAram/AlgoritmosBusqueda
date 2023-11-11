import { crearTablaCostes, handleSubmit } from "./helpers";
// Importamos el archivo CSS para agregar los estilos al HTML
import "./style.css";

// Ejecutamos la funcion que crea la tabla de costes entre los nodos del grafo
crearTablaCostes();

/*
  Agregamos el evento submit al formulario, el evento submit ocurre cuando el usuario da click sobre el boton del
  forumario o cuando oprime la tecla ENTER dentro de un campo de texto
*/
document.querySelector("form")!.addEventListener("submit", handleSubmit);
