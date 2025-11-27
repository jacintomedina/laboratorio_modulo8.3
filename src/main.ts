import { tablero } from "./modelo";
import { iniciaPartida } from "./motor";
import { clickBotonEmpezarPartida, mapearDivsCartas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  mapearDivsCartas();
  clickBotonEmpezarPartida();
  iniciaPartida(tablero);
});
