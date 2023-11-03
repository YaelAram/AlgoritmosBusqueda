import { crearTablaCostes, handleSubmit } from "./helpers";
import "./style.css";

crearTablaCostes();

document.querySelector("form")!.addEventListener("submit", handleSubmit);
