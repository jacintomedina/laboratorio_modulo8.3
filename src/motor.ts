import { Carta, Tablero } from "./modelo";

export const barajarCartas = (cartas: Carta[]): Carta[] => {
  let currentIndex = cartas.length;
  let randomIndex: number;

  // Mientras queden elementos a barajar.
  while (currentIndex !== 0) {
    // Elegimos un elemento restante al azar.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Intercambiamos el elemento actual con el elemento elegido al azar.
    [cartas[currentIndex], cartas[randomIndex]] = [
      cartas[randomIndex],
      cartas[currentIndex],
    ];
  }

  return cartas;
};

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  if (tablero.cartas[indice].estaVuelta || tablero.cartas[indice].encontrada) {
    return false;
  }
  return true;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    tablero.cartas[indice].estaVuelta = true;
  }
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  if (sonPareja(indiceA, indiceB, tablero)) {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
  }
};

export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  if (!sonPareja(indiceA, indiceB, tablero)) {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
  }
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};
