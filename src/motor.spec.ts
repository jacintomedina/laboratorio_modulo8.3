import {
  esPartidaCompleta,
  sonPareja,
  barajarCartas,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  parejaEncontrada,
  parejaNoEncontrada,
} from "./motor";

import { Tablero, Carta, tablero } from "./modelo";

describe("barajarCartas", () => {
  it("debería retornar un array con las mismas cartas en diferente orden", () => {
    //Arrange
    const cartas: Carta[] = tablero.cartas;

    //Act
    const resultado = barajarCartas(cartas);

    //Assert
    expect(resultado).toHaveLength(cartas.length);
  });
});

describe("sePuedeVoltearLaCarta", () => {
  it("debería devolver true si la carta no está volteada ni encontrada", () => {
    //Arrange
    const tableroPrueba: Tablero = {
      ...tablero,
      cartas: [
        {
          idFoto: 1,
          imagen:
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
          estaVuelta: false,
          encontrada: false,
        },
        ...tablero.cartas.slice(1),
      ],
    };

    //Act
    const resultado = sePuedeVoltearLaCarta(tableroPrueba, 0);

    //Assert
    expect(resultado).toBe(true);
  });

  it("debería devolver false si la carta está volteada o encontrada", () => {
    //Arrange
    const tableroPrueba: Tablero = {
      ...tablero,
      cartas: [
        {
          idFoto: 1,
          imagen:
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
          estaVuelta: false,
          encontrada: true,
        },
        ...tablero.cartas.slice(1),
      ],
    };

    //Act
    const resultado = sePuedeVoltearLaCarta(tableroPrueba, 0);

    //Assert
    expect(resultado).toBe(false);
  });
});

describe("voltearLaCarta", () => {
  it("debería voltear la carta si se puede voltear", () => {
    //Arrange
    const tableroPrueba: Tablero = {
      ...tablero,
      cartas: [
        {
          idFoto: 1,
          imagen:
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
          estaVuelta: false,
          encontrada: false,
        },
        ...tablero.cartas.slice(1),
      ],
    };

    //Act
    voltearLaCarta(tableroPrueba, 0);

    //Assert
    expect(tableroPrueba.cartas[0].estaVuelta).toBe(true);
  });
});

describe("sonPareja", () => {
  it("debería devolver true si indiceA es igual a indiceB", () => {
    //Arrange
    const indiceA = 1;
    const indiceB = 1;

    //Act
    const resultado = sonPareja(indiceA, indiceB, tablero);

    //Assert
    expect(resultado).toBe(true);
  });

  it("debería dar error en el test si indiceA no es igual a indiceB", () => {
    //Arrange
    const indiceA = 2;
    const indiceB = 1;

    //Act
    const resultado = sonPareja(indiceA, indiceB, tablero);

    //Assert
    expect(resultado).toBe(true);
  });
});

describe("parejaEncontrada", () => {
  it("debería marcar las cartas como encontradas si son pareja", () => {
    //Arrange
    const tableroPrueba: Tablero = {
      ...tablero,
      cartas: [
        {
          idFoto: 1,
          imagen:
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
          estaVuelta: true,
          encontrada: false,
        },
        {
          idFoto: 1,
          imagen:
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
          estaVuelta: true,
          encontrada: false,
        },
        ...tablero.cartas.slice(2),
      ],
    };

    //Act
    parejaEncontrada(tableroPrueba, 0, 1);

    //Assert
    expect(tableroPrueba.cartas[0].encontrada).toBe(true);
    expect(tableroPrueba.cartas[1].encontrada).toBe(true);
  });
});

describe("parejaNoEncontrada", () => {
  it("debería voltear las cartas hacia abajo si no son pareja", () => {
    //Arrange
    const tableroPrueba: Tablero = {
      ...tablero,
      cartas: [
        {
          idFoto: 1,
          imagen:
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
          estaVuelta: true,
          encontrada: false,
        },
        {
          idFoto: 2,
          imagen:
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
          estaVuelta: true,
          encontrada: false,
        },
        ...tablero.cartas.slice(2),
      ],
    };

    //Act
    parejaNoEncontrada(tableroPrueba, 0, 1);

    //Assert
    expect(tableroPrueba.cartas[0].estaVuelta).toBe(false);
    expect(tableroPrueba.cartas[1].estaVuelta).toBe(false);
  });
});

describe("esPartidaCompleta", () => {
  it("debería devolver true si todas las cartas han sido encontradas", () => {
    //Arrange
    const tableroPrueba: Tablero = {
      ...tablero,
      cartas: tablero.cartas.map((carta) => ({
        ...carta,
        encontrada: true,
      })),
    };

    //Act
    const resultado = esPartidaCompleta(tableroPrueba);

    //Assert
    expect(resultado).toBe(true);
  });
});
