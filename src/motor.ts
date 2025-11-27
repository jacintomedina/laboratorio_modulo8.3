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
  // if (tablero.cartas[indice].estaVuelta || tablero.cartas[indice].encontrada) {
  //   return false;
  // }
  // return true;

  return (
    !tablero.cartas[indice].estaVuelta && !tablero.cartas[indice].encontrada
  );
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;

  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
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
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;

  if (esPartidaCompleta(tablero)) {
    tablero.estadoPartida = "PartidaCompleta";
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};

export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;

  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};

export const iniciaPartida = (tablero: Tablero): void => {
  const cartasReseteadas = tablero.cartas.map((carta) => {
    return {
      ...carta,
      estaVuelta: false,
      encontrada: false,
    };
  });
  const cartasBarajadas = barajarCartas(cartasReseteadas);
  tablero.cartas = [...cartasBarajadas];
  tablero.estadoPartida = "CeroCartasLevantadas";

  tablero.intentos = 0;
};
