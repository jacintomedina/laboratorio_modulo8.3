import { Tablero } from "./modelo";
import { barajarCartas } from "./motor";

export const iniciaPartida = (tablero: Tablero): void => {
  tablero.cartas = barajarCartas(tablero.cartas);
};
